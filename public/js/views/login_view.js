App.Views.LoginPopup = Backbone.View.extend({
	el: '#app-wrapper',

	initialize: function() { 
    this.loginTemplate = Handlebars.compile( $('#login-template').html() );
  },
	render: function() {
    this.$el.empty;
    this.$el.html(this.loginTemplate);
	},
	events: {
		'click #login-btn': 'login',
		'click #create-account-btn': 'signup',
    'click #close-btn': 'backHome'
	},
	showPopup: function() {
    this.$el.fadeIn(1000);
  },
  hidePopup: function() {
    this.$el.empty;
  },
  backHome: function() {
    App.home = new App.Views.Home();
    App.home.render();
  },
	login: function(){
    var username = $('#login-username').val();
    var password = $('#login-password').val();

    $.post('/users/sessions',{
      username: username,
      password: password
    }).done(this.renderSession.bind(this))
      .fail(function(response) {
      var err = response.responseJSON;
      alert(err.err + ' - ' + err.msg);
    });   
  },
  renderSession: function(userData) {
    this.hidePopup();
    var currentUser = new App.Models.User(userData);
    App.createPresentation = new App.Views.CreatePresentation({model: currentUser});
    Backbone.history.navigate("create", true);
  },
  signup: function() {
    var username = $('#create-username').val();
    var password = $('#create-password').val();
    var name = $('#create-name').val();

      if (password.length < 6 || password.length > 20) {
              $('#signup-errors').empty();
              $("<li class='signup-error'>").text("Password must be between 6-20 characters long").appendTo("#signup-errors");
              $("#signup-errors li").fadeOut(2500);
      } else {
         $.post('/users', {
            username: username,
            password: password,
            name: name
          })
            .fail(function(err) {
              var errors = "";
              err.responseJSON.err.forEach(function(error) {
                errors += "<li>" + error + "</li>";
              });
              $("#signup-errors").html(errors);
            })
            .done(function(user){
              this.model = new App.Models.User(user);
              this.createUser();
              $('#signup-errors').empty();
            }.bind(this))
        }
  },
  createUser: function() {
    $("#create-account-box").prepend("<h3>Account Created!</h3>")
    $("h3").attr("class", "on-create");
    $(".on-create").fadeOut(2000);
  },
});
