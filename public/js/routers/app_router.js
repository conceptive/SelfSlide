App.Routers.Main = Backbone.Router.extend({
	initialize: function() {
		console.log('App Ready...');

		App.loginPopup = new App.Views.LoginPopup();
		App.loginPopup.render();

	},

	routes: {
		"" : "login"
	},

	login: function() {
		App.loginPopup.render();
	}

});