App.Views.PresentationView = Backbone.Views.extend({
	el: '#presentation-wrapper',

	initialize: function() {
		this.template = Handlebars.compile( $('#presentation-template').html() );
	},

	render: function() {
		this.$el.html(this.template( this.model.toJSON() ));
	},

	setPresentation: function(result) {
    this.model = presentation;
    this.render();
  },

})