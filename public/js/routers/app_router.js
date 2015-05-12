App.Routers.Main = Backbone.Router.extend({
	initialize: function() {
		console.log('App Ready...');

		// App.previewOne = new App.Views.PreviewOne();

		App.home = new App.Views.Home();
		App.home.render();

		App.topBar = new App.Views.TopBar();
		App.topBar.render();

		App.loginPopup = new App.Views.LoginPopup();
		App.loginPopup.render();

		App.createPresentation = new App.Views.CreatePresentation();
	}, 
	
	routes: {
		"login": "loginWindow",
		"create": "create_presentation",
		"preview_one": "preview_one",
		"presentation/:id": "showPresentation"
	},

	loginWindow: function() {
		App.loginPopup.render();
	},

  createPresentation: function() {
  	App.createPresentation.render();
  },

  preview_one: function() {
  	App.previewOne.render();
  },

  showPresentation: function() {
  	App.presentationView = new App.Views.PresentationView();
  	App.presentationView.render();
  }

});

