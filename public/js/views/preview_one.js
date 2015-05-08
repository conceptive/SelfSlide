App.Views.PreviewOne = Backbone.View.extend({
	el: '#inner-app-wrapper',

	initialize: function() {
		$("#inner-app-wrapper").empty();
		this.template = Handlebars.compile($('#preview-one-template').html());
		this.render()
	},

	render: function() {
		this.$el.html(this.template);
	},


})