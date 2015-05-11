App.Views.LoginPopup = Backbone.View.extend({
	el: '#login-popup',

	initialize: function() {
    this.loginTemplate = Handlebars.compile($('#login-template').html());
  },

	render: function() {
    this.$el.html(this.loginTemplate);
	},

	events: {
		'click #login-btn': 'login',
		'click #create-account-btn': 'signup',
    'click #close-btn': 'hidePopup'
	},

	showPopup: function() {
    this.$el.fadeIn(1000);
  },

  hidePopup: function() {
    this.$el.fadeOut(500);
    App.router.navigate("create_presentation", {trigger: true})
  },

	login: function(){
    var username = $('#login-username').val();
    var password = $('#login-password').val();

    $.post('/sessions',{
      username: username,
      password: password
    }).done(this.renderSession.bind(this))
      .done(this.hidePopup.bind(this))
        .fail(function(response) {
        var err = response.responseJSON;
        alert(err.err + ' - ' + err.msg);
    });
  },

  renderSession: function() {
    // App.router.navigate("home", {trigger: true})
  },

  signup: function() {
    var username = $('#create-username').val();
    var password = $('#create-password').val();
    var name = $('#create-name').val();

    $.post('/users', {
      username: username,
      password: password,
      name: name
    }).done(this.createUser.bind(this));
  },

  createUser: function() {
    $("#create-account-box").prepend("<h3>Account Created!</h3>")
    $("h3").attr("class", "on-create");
    $(".on-create").fadeOut(3000);
        //$('#session').html(this.loginTemplate());
  },

});
