define(['jquery','backbone', 'view'], function($,Backbone, View) {
	var Router = Backbone.Router.extend({
		routes: {
			'route': 'helloWorld'
		},
		
		helloWorld : function() {
			var view = new View();
			$('#container').html(view.render());
		}
	})
	return Router;

});