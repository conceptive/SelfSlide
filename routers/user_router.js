var application_root = __dirname,
	  express            = require("express"),
	  logger             = require("morgan"),
	  bodyParser         = require("body-parser"),
	  models             = require("../models"),
	  path               = require("path"),
	  bcrypt             = require("bcrypt"),
	  request            = require("request"),
	  session            = require("express-session");
 
var User      		 = models.users;
var Presentation   = models.presentations;

var userRouter = express.Router();

// var restrictAccess = function(req, res, next) {
//   var sessionID = parseInt( req.session.currentUser );
//   var reqID = parseInt( req.params.id );

//   sessionID === reqID ? next() : res.status(401).send({err: 401, msg: 'You do not have the right permission for this.'});
// };

// var authenticate = function(req, res, next) {
//   req.session.currentUser ? next() : res.status(400).send({err: 400, msg: 'You need to login again to access this section.'});
// };

userRouter.use(session({
  secret: 'thisisasecret',
  resave: false,
  saveUninitialized: true
}));

// Debugging Only
userRouter.get('/debug_session', function(req, res) {
  res.send(req.session);
});

userRouter.get('/current_user', function(req, res) {
  var userID = req.session.currentUser;
  User.findOne(userID)
    .then(function(user) {
      res.send(user);
    });
});

userRouter.post('/sessions', function(req, res) {
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
            res.send("Correct Credentials");
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

userRouter.delete('/sessions', function(req, res) {
  delete req.session.currentUser;
  res.send('Successfully logged out.');
});

userRouter.get("/", function(req, res) {
  User
  .findAll()
  .then(function(users) {
    res.send(users);
  });
});

userRouter.get("/:id" , function(req, res) {
	var userID = req.params.id;
	User.findOne({
		where: {id: userID},
		include: Presentation
	})
	.then(function(user) {
		res.send(user);
	});
});

userRouter.get("/:id/presentations" , function(req, res) {
  User.findOne({
    where: { id: req.params.id },
    include: [Presentation]
  })
  .then(function(user) {
    res.send(user.presentations);
  })
});

userRouter.post('/', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  bcrypt.hash(password, 10, function(err, hash) {
    User
      .create({
        username: username,
        password_digest: hash,
        name: req.body.name
      })
      .then(function(user) {
        res.send(user);
      });
  });
});

userRouter.put("/:id", function(req, res) {
  var userID = req.params.id;
  var userParams = req.body;
  User
  .findOne(userID)
  .then(function(user) {
    user
    .update(userParams)
    .then(function(updatedUser) {
      res.send(updatedUser);
    });
  });
});

userRouter.delete("/:id", function(req, res) {
  var userID = req.params.id;
  User
  .findOne(userID)
  .then(function(user) {
    user
    .destroy()
    .then(function() {
      res.send(user);
    });
  });
});

module.exports = userRouter;
