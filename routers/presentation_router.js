var application_root = __dirname,
	  express            = require("express"),
	  logger             = require("morgan"),
	  bodyParser         = require("body-parser"),
	  models             = require("../models"),
	  path               = require("path"),
	  bcrypt             = require("bcrypt"),
	  request            = require("request"),
	  session            = require("express-session");
 
var User      	   = models.users;
var Presentation   = models.presentations;

var presentationRouter = express.Router();

presentationRouter.get("/" , function(req, res) {
  Presentation
    .findAll()
    .then(function(presentations) {
      res.send(presentations);
    });
});

presentationRouter.post("/" , function(req, res) {
  console.log(req.body);
  var presentationData = req.body;
  // presentationData.user_id = parseInt(req.session.currentUser);
  Presentation
  .create(presentationData)
  .then(function(presentation) {
    res.send(presentation);
  });
});

presentationRouter.put("/:id" , function(req, res) {
  var presentationID = req.params.id;
  var presentationData = req.body;

  Presentation
  .findOne(presentationID)
  .then(function(presentation) {
    presentation
    .update(presentationData)
    .then (function(updatedPresentation) {
      res.send(updatedPresentation)
    });
  });
});

presentationRouter.get("/:id", function(req, res) {
  Presentation
  .findOne(req.params.id)
  .then(function(presentation) {
    res.send(presentation);
  });
});

presentationRouter.delete("/:id" , function(req, res) {
  var presentationID = req.params.id;

  Presentation
  .findOne(presentationID)
  .then(function(presentation) {
    presentation
    .destroy()
    .then(function() {
      res.send(presentation);
    });
  });
});

module.exports = presentationRouter;
