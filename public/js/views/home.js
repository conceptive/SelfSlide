App.Views.Home = Backbone.View.extend ({
	el: '#welcome',

	initialize: function() {
		this.template = Handlebars.compile($('#home-template').html());
  },
	render: function() {
    this.$el.html(this.template);
    console.log('intro page here');
	},
	setUser: function(user) {
    this.model = user;
  },
  getStarted: function () {
  	this.hideWelcome();
  },
  hideWelcome: function() {
  	this.$el.fadeOut(500);
  },
  events: {
    "click #preview-one-btn": "getStarted"
  }
})