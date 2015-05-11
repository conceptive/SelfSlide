App.Views.TopBar = Backbone.View.extend({
  el: "#topbar-container",

  initialize: function() {
    this.template = Handlebars.compile( $("#header-template").html());
  },
  
  render: function() {
    this.$el.html(this.template);
    console.log('top bar loaded')
  },

  login: function() {
    Backbone.history.navigate("login", {trigger: true});
  },

  events: {
    "click .nav-login": "login",
  }
})