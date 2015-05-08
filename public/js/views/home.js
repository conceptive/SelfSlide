App.Views.Home = Backbone.View.extend ({
	el: '#welcome',

	initialize: function() {
		this.template = Handlebars.compile($('#home-template').html());
		console.log('intro page here')
	},
	render: function() {
    this.$el.html(this.template);
	},
	setUser: function(user) {
    this.model = user;
  },
  renderPreviewOne: function () {
  	this.hideWelcome();
  },
  hideWelcome: function() {
  	this.$el.fadeOut(500);
  },
  events: {
    "click #preview-one-btn": "renderPreviewOne"
  }
})