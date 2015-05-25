App.Views.TopBar = Backbone.View.extend({
  el: "#topbar-container",
  initialize: function() {
    this.template = Handlebars.compile( $("#header-template").html());
  },
  render: function() {
    this.$el.html(this.template);
  },
  login: function() {
    App.router.navigate("login", {replace: true});
  },
  events: {
    "click .nav-login": "login",
  }
})