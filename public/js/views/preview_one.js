App.Views.PreviewOne = Backbone.View.extend({
	el: '#app-wrapper',

	initialize: function() {
		this.template = Handlebars.compile($('#preview-one-template').html());
		console.log('preview here')
	},
	
	render: function() {
		this.$el.html(this.template);
			console.log('showing presentation');
			Reveal.initialize({
				history: true
		});
	},

	hide: function() {
		this.$el.fadeOut(500);
	},

	showLogin: function() {
		Backbone.history.navigate("login", {trigger: true});
	},

	setPresentation: function(userPresentation) {
    this.model = userPresentation;
    this.render();
  },

	setUser: function(user) {
    this.model = user;
    this.render();
  },

	events: {
		"click #get-started-btn": "showLogin"
	}
})