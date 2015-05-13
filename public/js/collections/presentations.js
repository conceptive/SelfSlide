App.Collections.UserPresentations = Backbone.Collection.extend({
	initialize: function() {
	},
	url:'/presentations',
	model: App.Models.UserPresentation
})