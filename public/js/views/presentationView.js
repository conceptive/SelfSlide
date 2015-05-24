App.Views.PresentationView = Backbone.View.extend({
	el: '#app-wrapper',

	initialize: function() {
		this.template = Handlebars.compile( $('#presentation-template').html() );
	},
	render: function() {
		// $('#logo').hide();
		var compiledTemplate = this.template( this.model.toJSON() );
		this.$el.html(compiledTemplate);
		Reveal.initialize({
			history: false
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