var application_root   = __dirname,
		express            = require("express"),
		logger             = require("morgan"),
		bodyParser		     = require("body-parser"),
		models			       = require("./models"),
		path			         = require("path"),
		bcrypt             = require("bcrypt"),
  	request			       = require("request"),
  	session            = require("express-session"),
  	presentationRouter = require('./routers/presentation_router.js'),
    userRouter         = require('./routers/user_router.js');

var User = models.users;
var app  = express();
var secret = 'mck';
var port = process.env.PORT || 8080;
var io = require('socket.io').listen(app.listen(port));

// Initialize a new socket.io application
var presentation = io.on('connection', function (socket) {
  socket.on('load', function(data){
    socket.emit('access', {
      access: (data.key === secret ? "granted" : "denied")
    });
  });

  socket.on('slide-changed', function(data){
      // Check the secret key again
      if(data.key === secret) {

        // Tell all connected clients to navigate to the new slide
        presentation.emit('navigate', {
          hash: data.hash
        });
      }
  });
});

// Server Configuration
app.use( logger('dev') );
// set up request parsing
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );

// set up serving of static assets
app.use( express.static( path.join( application_root, 'public' ) ) );
app.use( express.static( path.join( application_root, 'browser' ) ) );

app.use(session({
  secret: 'thisisasecret',
  resave: false,
  saveUninitialized: true
}));

// ***** ROUTES ******

// Debugging Only
app.get('/debug_session', function(req, res) {
  res.send(req.session);
});

app.post('/sessions', function(req, res) {
  var loginUsername = req.body.username;
  var loginPassword = req.body.password;

  User
    .findOne({
      where: { username: loginUsername }
    })
    .then(function(user) {
      if (user) {
        var passwordDigest = user.password_digest;
        bcrypt.compare(loginPassword, passwordDigest, function(err, result) {
          if (result) {
            req.session.currentUser = user.id;
            res.send(user);
          } else {
            res.status(400);
            res.send({
              err: 400,
              msg: 'Wrong password.'
            });
          }
        });
      } else {
        res.status(400);
        res.send({
          err: 400,
          msg: 'Username does not exist.'
        });
      }
    });
});

app.delete('/sessions', function(req, res) {
  delete req.session.currentUser;
  res.send('Successfully logged out.');
});

app.get('/current_user', function(req, res) {
  var userID = req.session.currentUser;
  User.findOne(userID)
    .then(function(user) {
      res.send(user);
    });
});

app.use('/users', userRouter);
app.use('/presentations', presentationRouter);

// Export app as module
module.exports = app;
 
console.log('Presentation running on http://localhost:' + port);