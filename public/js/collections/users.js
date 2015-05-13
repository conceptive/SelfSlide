App.Collections.Users = Backbone.Collection.extend({
	initialize: function() {
	},
	url:'/users',
	model: App.Models.User
})