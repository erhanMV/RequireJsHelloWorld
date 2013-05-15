define(['jquery', 'backbone', 'underscore', 'router'], 
	function($, Backbone, _, Router) {
		var mv = $();
		var initialize = function() {			
			mv.router =  new Router();
			window.meetingvenue = mv;
			Backbone.history.start();
		}
		
		return {
			initialize: initialize
		};
	});