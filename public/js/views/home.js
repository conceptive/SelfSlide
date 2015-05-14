App.Views.Home = Backbone.View.extend ({
	el: '#app-wrapper',

	initialize: function() {
		this.template = Handlebars.compile($('#home-template').html());
  },
	render: function() {
    if (this.model) {
      var compiledTemplate = this.template( this.model.toJSON() );
    } else {
      var compiledTemplate = this.template();
    }
    this.$el.html(compiledTemplate);
	},
	setUser: function(user) {
    this.model = user;
  },
  getStarted: function() {
    App.loginPopup = new App.Views.LoginPopup();
    App.loginPopup.render();
  },
  showPreview: function() {
    App.previewOne = new App.Views.PreviewOne();
    App.previewOne.render();
  },
  hideWelcome: function() {
  	this.$el.fadeOut(500);
  },
  events: {
    "click #preview-one-btn": "getStarted"
  }
})