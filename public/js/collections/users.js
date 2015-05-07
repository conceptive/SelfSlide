App.Collections.Users = Backbone.Collection.extend({
	initialize: function() {
		console.log('User Collection Created');
	},
	url:'/users',
	model: App.Models.User
})