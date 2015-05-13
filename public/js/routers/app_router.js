App.Routers.Main = Backbone.Router.extend({
	initialize: function() {
		console.log('App Ready...');

		App.home = new App.Views.Home();
		App.home.render();

		App.topBar = new App.Views.TopBar();
		App.topBar.render();

		App.loginPopup = new App.Views.LoginPopup();

		App.presentations = new App.Collections.UserPresentations();
		App.presentations.fetch();

		App.presentationView = new App.Views.PresentationView({ model: new App.Models.UserPresentation });

	},
	routes: {
		"login": "loginWindow",
		"create": "create_presentation",
		"preview_one": "preview_one",
		// "users/:id/presentations": "showUserPresentations",
		// "presentations/:presentation_id": "showPresentation"
	},
	loginWindow: function() {
		App.loginPopup.render();
	},
  createPresentation: function() {
  	App.createPresentation.render();
  },
  preview_one: function() {
  	App.previewOne = new App.Views.PreviewOne();
  	App.previewOne.render();
  },
  showPresentation: function(presentation_id) {
  	App.presentations.fetch({
  		success: function() {
  			var presentation = App.presentations.get(presentation_id);
  		App.presentationView.setPresentation(presentation)
  		}
  	})
  }
});


