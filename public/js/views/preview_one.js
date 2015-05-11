App.Views.PreviewOne = Backbone.View.extend({
	el: '#preview-wrapper',

	initialize: function() {
		this.template = Handlebars.compile($('#preview-one-template').html());
		this.render()
	},
	
	render: function() {
		this.$el.html(this.template);
	},

	hide: function() {
		this.$el.fadeOut(500);
	},

	showLogin: function() {
		Backbone.history.navigate("login", {trigger: true});
		// this.hide();
	},

	events: {
		"click #get-started-btn": "showLogin"
	}
})