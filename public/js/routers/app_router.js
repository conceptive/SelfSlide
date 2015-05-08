App.Routers.Main = Backbone.Router.extend({
	initialize: function() {
		console.log('App Ready...');

		// App.loginPopup = new App.Views.LoginPopup();

		App.previewOne = new App.Views.PreviewOne();
		App.previewOne.render();

		App.home = new App.Views.Home();
		App.home.render();

	},

	routes: {
		"": "showHome",
		"login" : "login",
	},

	login: function() {
		App.loginPopup.render();
	},

	showHome: function() {
	  App.home.render();
	  App.topBar = new App.Views.TopBar();
		App.topBar.render();
  },


});