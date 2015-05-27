App.Views.CreatePresentation = Backbone.View.extend({
	el: '#app-wrapper',
	initialize: function() {
		this.template = Handlebars.compile($('#create-presentation-template').html());
		this.render();
	},
	render: function() {
    var compiledTemplate = this.template( this.model.toJSON() );
		this.$el.html(compiledTemplate);
		$('.slide-box-1').fadeIn(200);
    $('#slide-1-btn').css('color', '#E26A6A')
	},
	events: {
    'click #close-editor': 'hideModal',
    'click #edit-btn': 'render',
    'click #create-btn': 'getValues',
    'click #logout': 'logOut',
    'click #slide-1-btn, #slide-2-prev': 'showSlideOne',
    'click #slide-2-btn, #slide-1-next, #slide-3-prev': 'showSlideTwo',
    'click #slide-3-btn, #slide-2-next, #slide-4-prev': 'showSlideThree',
    'click #slide-4-btn, #slide-3-next, #slide-5-prev': 'showSlideFour',
    'click #slide-5-btn, #slide-4-next, #slide-6-prev': 'showSlideFive',
    'click #slide-6-btn, #slide-5-next, #slide-7-prev': 'showSlideSix',
    'click #slide-7-btn, #slide-6-next, #slide-8-prev': 'showSlideSeven',
    'click #slide-8-btn, #slide-7-next': 'showSlideEight',
  },
  showModal: function() {
    this.$el.fadeIn(200);
  },
  hideModal: function() {
    this.$el.fadeOut(200);
  },
  showSlideOne: function() {
    $('.slide-box-2, .slide-box-3, .slide-box-4, .slide-box-5, .slide-box-6, .slide-box-7, .slide-box-8').fadeOut(200);
    $('.slide-box-1').fadeIn(200);
    $('.slide-nav').css('color', '#eeeeee' );
    $('#slide-1-btn').css('color', '#E26A6A')
  },
  showSlideTwo: function() {
    $('.slide-box-1, .slide-box-3, .slide-box-4, .slide-box-5, .slide-box-6, .slide-box-7, .slide-box-8').fadeOut(200);
    $('.slide-box-2').fadeIn(200);
    $('.slide-nav').css('color', '#eeeeee' );
    $('#slide-2-btn').css('color', '#E26A6A')
  },
  showSlideThree: function() {
    $('.slide-box-1, .slide-box-2, .slide-box-4, .slide-box-5, .slide-box-6, .slide-box-7, .slide-box-8').fadeOut(200);
    $('.slide-box-3').fadeIn(200);
    $('.slide-nav').css('color', '#eeeeee' );
    $('#slide-3-btn').css('color', '#E26A6A')
  },
  showSlideFour: function() {
    $('.slide-box-1, .slide-box-2, .slide-box-3, .slide-box-5, .slide-box-6, .slide-box-7, .slide-box-8').fadeOut(200);
    $('.slide-box-4').fadeIn(200);
    $('.slide-nav').css('color', '#eeeeee' );
    $('#slide-4-btn').css('color', '#E26A6A')
  },
   showSlideFive: function() {
    $('.slide-box-1, .slide-box-2, .slide-box-3, .slide-box-4, .slide-box-6, .slide-box-7, .slide-box-8').fadeOut(200);
    $('.slide-box-5').fadeIn(200);
    $('.slide-nav').css('color', '#eeeeee' );
    $('#slide-5-btn').css('color', '#E26A6A')
  },
   showSlideSix: function() {
    $('.slide-box-1, .slide-box-2, .slide-box-3, .slide-box-4, .slide-box-5, .slide-box-7, .slide-box-8').fadeOut(200);
    $('.slide-box-6').fadeIn(200);
    $('.slide-nav').css('color', '#eeeeee' );
    $('#slide-6-btn').css('color', '#E26A6A')
  },
   showSlideSeven: function() {
    $('.slide-box-1, .slide-box-2, .slide-box-3, .slide-box-4, .slide-box-5, .slide-box-6, .slide-box-8').fadeOut(200);
    $('.slide-box-7').fadeIn(200);
    $('.slide-nav').css('color', '#eeeeee' );
    $('#slide-7-btn').css('color', '#E26A6A')
  },
   showSlideEight: function() {
    $('.slide-box-1, .slide-box-2, .slide-box-3, .slide-box-4, .slide-box-5, .slide-box-6, .slide-box-7').fadeOut(200);
    $('.slide-box-8').fadeIn(200);
    $('.slide-nav').css('color', '#eeeeee' );
    $('#slide-8-btn').css('color', '#E26A6A')
  },
  logOut: function() {
    $.ajax({
    url: '/users/sessions',
    method: 'DELETE',
  });
    App.home = new App.Views.Home();
    App.home.render();
  },
  getValues: function() {
  	var slide1bg = this.$el.find("#edit-s1-bg").val();
  	var slide1txt = this.$el.find("#edit-s1-txt").val();
    var slide1title = this.$el.find("#edit-s1-title").val();
  	var slide2bg = this.$el.find("#edit-s2-bg").val();
    var slide2title = this.$el.find("#edit-s2-title").val();
  	var slide2txt = this.$el.find("#edit-s2-txt").val();
  	var slide3bg = this.$el.find("#edit-s3-bg").val();
    var slide3title = this.$el.find("#edit-s3-title").val();
  	var slide3txt = this.$el.find("#edit-s3-txt").val();
  	var slide4bg = this.$el.find("#edit-s4-bg").val();
    var slide4title = this.$el.find("#edit-s4-title").val();
  	var slide4txt = this.$el.find("#edit-s4-txt").val();
  	var slide5bg = this.$el.find("#edit-s5-bg").val();
    var slide5title = this.$el.find("#edit-s5-title").val();
  	var slide5txt = this.$el.find("#edit-s5-txt").val();
  	var slide6bg = this.$el.find("#edit-s6-bg").val();
    var slide6title = this.$el.find("#edit-s6-title").val();
  	var slide6txt = this.$el.find("#edit-s6-txt").val();
  	var slide7bg = this.$el.find("#edit-s7-bg").val();
    var slide7title = this.$el.find("#edit-s7-title").val();
  	var slide7txt = this.$el.find("#edit-s7-txt").val();
  	var slide8bg = this.$el.find("#edit-s8-bg").val();
    var slide8title = this.$el.find("#edit-s8-title").val();
  	var slide8txt = this.$el.find("#edit-s8-txt").val();
  
  	$.ajax({
  		url: "/presentations",
  		method: 'POST',
  		data: {
  			slide_1_bg: slide1bg,
        slide_1_title: slide1title,
  			slide_1_text: slide1txt,
  			slide_2_bg: slide2bg,
        slide_2_title: slide2title,
  			slide_2_text: slide2txt,
  			slide_3_bg: slide3bg,
        slide_3_title: slide3title,
  			slide_3_text: slide3txt,
  			slide_4_bg: slide4bg,
        slide_4_title: slide4title,
  			slide_4_text: slide4txt,
  			slide_5_bg: slide5bg,
        slide_5_title: slide5title,
  			slide_5_text: slide5txt,
  			slide_6_bg: slide6bg,
        slide_6_title: slide6title,
  			slide_6_text: slide6txt,
  			slide_7_bg: slide7bg,
        slide_7_title: slide7title,
  			slide_7_text: slide7txt,
  			slide_8_bg: slide8bg,
        slide_8_title: slide8title,
  			slide_8_text: slide8txt,
  		}
  	}).done(this.showPresentation.bind(this));
  },
  showPresentation: function(presentationData) {
    this.$el.empty; 
    App.presentations.add(presentationData);
      App.presentationView.setPresentation( App.presentations.last() );
      var presentationID = presentationData.id;
      App.router.navigate("presentations/" + presentationID, {trigger: true});
  }
});
