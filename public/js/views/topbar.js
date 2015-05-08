App.Views.TopBar = Backbone.View.extend({
  el: "#topbar-container",

  initialize: function() {
    this.template = Handlebars.compile( $("#header-template").html());
  },
  render: function() {
    this.$el.html(this.template);
  },

  // events: {
  //   "click .nav-search": "toSearch",
  //   "click .nav-profile": "viewProfile"  
  // }
})