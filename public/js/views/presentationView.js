App.Views.PresentationView = Backbone.View.extend({
	el: '#app-wrapper',

	initialize: function() {
		this.template = Handlebars.compile( $('#presentation-template').html() );
	},
	render: function() {
		var compiledTemplate = this.template( this.model.toJSON() );
		this.$el.html(compiledTemplate);
		console.log('showing presentation');
		Reveal.initialize({
			history: true
		});
	},
	setPresentation: function(userPresentation) {
    this.model = userPresentation;
    this.render();
  },
	setUser: function(user) {
    this.model = user;
    this.render();
  },
})