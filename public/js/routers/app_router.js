App.Routers.Main = Backbone.Router.extend({
	initialize: function() {
		console.log('App Ready...');

		App.previewOne = new App.Views.PreviewOne();

		App.home = new App.Views.Home();

		App.topBar = new App.Views.TopBar();
		App.topBar.render();

		App.loginPopup = new App.Views.LoginPopup();

	},

	routes: {
		"": "showHome",
		"login": "loginWindow",
		"create": "create_presentation"
	},

	loginWindow: function() {
		App.loginPopup.render();
	},

	showHome: function() {
	  App.home.render();
  },

  createPresentation: function() {
  	App.createPresentation = new App.Views.CreatePresentation();
  	App.createPresentation.render();
  }

});