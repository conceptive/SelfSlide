// require('newrelic');
var express            = require("express"),
		logger             = require("morgan"),
		bodyParser		     = require("body-parser"),
		models			       = require("./models"),
		path			         = require("path"),
		bcrypt             = require("bcrypt"),
  	request			       = require("request"),
  	session            = require("express-session"),
    io                 = require('socket.io').listen(app),
  	presentationRouter = require('./routers/presentation_router.js'),
    userRouter         = require('./routers/user_router.js');

var User = models.users;
var app  = express();

// Server Configuration
app.use( logger('dev') );
// set up request parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );

// set up serving of static assets
app.use(express.static(__dirname + '/public'));

// ***** ROUTES ******
app.use('/users', userRouter);
app.use('/presentations', presentationRouter);

// Export app as module
module.exports = app;

app.set('port', process.env.PORT || 3000);

app.listen(process.env.PORT || 3000, function() {
  console.log("Server on 3000");
});
