define(['jquery','backbone', 'underscore', 'text!templates/viewTemplate.html'], function($,Backbone, _, viewTemplate) {
	var View = Backbone.View.extend({
		render: function() {
			return _.template(viewTemplate);
		}
	})
	
	return View;
});