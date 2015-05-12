App.Views.CreatePresentation = Backbone.View.extend({
	el: '#create-wrapper',

	initialize: function() {
		this.template = Handlebars.compile($('#create-presentation-template').html());
		this.render()
	},
	
	render: function() {
		this.$el.html(this.template);
		console.log('create presentation')
	},

	events: {
    'click #close-editor': 'hideModal',
    'click #edit-btn': 'render',
    'click #create-btn': 'getValues'
  },

  showModal: function() {
    this.$el.fadeIn(200);
    $('body').css('overflow','hidden')
  },

  hideModal: function() {
    this.$el.fadeOut(200);
    $('body').css('overflow','scroll')
  },

  getValues: function() {
  	var slide1bg = this.$el.find("#edit-s1-bg").val();
  	var slide1txt = this.$el.find("#edit-s1-txt").val();
  	var slide2bg = this.$el.find("#edit-s2-bg").val();
  	var slide2txt = this.$el.find("#edit-s2-txt").val();
  	var slide3bg = this.$el.find("#edit-s3-bg").val();
  	var slide3txt = this.$el.find("#edit-s3-txt").val();
  	var slide4bg = this.$el.find("#edit-s4-bg").val();
  	var slide4txt = this.$el.find("#edit-s4-txt").val();
  	var slide5bg = this.$el.find("#edit-s5-bg").val();
  	var slide5txt = this.$el.find("#edit-s5-txt").val();
  	var slide6bg = this.$el.find("#edit-s6-bg").val();
  	var slide6txt = this.$el.find("#edit-s6-txt").val();
  	var slide7bg = this.$el.find("#edit-s7-bg").val();
  	var slide7txt = this.$el.find("#edit-s7-txt").val();
  	var slide8bg = this.$el.find("#edit-s8-bg").val();
  	var slide8txt = this.$el.find("#edit-s8-txt").val();
  	var slide9bg = this.$el.find("#edit-s9-bg").val();
  	var slide9txt = this.$el.find("#edit-s9-txt").val();
  	var slide10bg = this.$el.find("#edit-s10-bg").val();
  	var slide10txt = this.$el.find("#edit-s10-txt").val();
  
  	$.ajax({
  		url: "/presentations",
  		method: 'POST',
  		data: {
  			slide_1_bg: slide1bg,
  			slide_1_text: slide1txt,
  			slide_2_bg: slide2bg,
  			slide_2_text: slide2txt,
  			slide_3_bg: slide3bg,
  			slide_3_text: slide3txt,
  			slide_4_bg: slide4bg,
  			slide_4_text: slide4txt,
  			slide_5_bg: slide5bg,
  			slide_5_text: slide5txt,
  			slide_6_bg: slide6bg,
  			slide_6_text: slide6txt,
  			slide_7_bg: slide7bg,
  			slide_7_text: slide7txt,
  			slide_8_bg: slide8bg,
  			slide_8_text: slide8txt,
  			slide_9_bg: slide9bg,
  			slide_9_text: slide9txt,
  			slide_10_bg: slide10bg,
  			slide_10_text: slide10txt,
  		}
  	}).done(this.showPresentation.bind(this));
  	console.log('got them values')
  },

  showPresentation: function(presentation) {
  	alert('presentation created');
    App.router.navigate("showPresentation", {trigger: true, replace: true})
  }
});