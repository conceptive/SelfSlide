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
var Presentation   = models.slides;

var userRouter = express.Router();

var restrictAccess = function(req, res, next) {
  var sessionID = parseInt( req.session.currentUser );
  var reqID = parseInt( req.params.id );

  sessionID === reqID ? next() : res.status(401).send({err: 401, msg: 'You do not have the right permission for this.'});
};

var authenticate = function(req, res, next) {
  req.session.currentUser ? next() : res.status(400).send({err: 400, msg: 'LOGIN TROLL'});
};

userRouter.get("/", function(req, res) {
  User
  .findAll()
  .then(function(users) {
    res.send(users);
  });
});

userRouter.get("/:id" , authenticate, restrictAccess, function(req, res) {
	var userID = req.params.id;
	User.findOne({
		where: {id: userID},
		include: Presentation
	})
	.then(function(user) {
		res.send(user);
	});
});

userRouter.get("/:id/slides" , authenticate, restrictAccess, function(req, res) {
  User.findOne({
    where: { id: req.params.id },
    include: [Presentation]
  })
  .then(function(user) {
    res.send(user.slides);
  })
});

userRouter.post('/', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var usersEmail = req.body.email;
  var usersName = req.body.name;

  bcrypt.hash(password, 10, function(err, hash) {
    User
      .create({
        username: username,
        password_digest: hash,
        name: usersName,
        email: usersEmail
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