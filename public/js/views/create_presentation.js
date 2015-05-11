App.Views.CreatePresentation = Backbone.View.extend({
	el: '#create-wrapper',

	initialize: function() {
		this.template = Handlebars.compile($('#create-presentation-template').html());
		this.render()
	},
	
	render: function() {
		this.$el.html(this.template);
	},

})