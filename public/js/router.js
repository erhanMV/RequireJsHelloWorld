define(['jquery','backbone', 'view', 'typeahead'], function($,Backbone, View, typeahead) {
	var Router = Backbone.Router.extend({
		routes: {
			'route': 'helloWorld'
		},
		
		helloWorld : function() {
			var view = new View();
			$('#container').html(view.render());
			var that = this;
			$('#typeahead-input').typeahead({
			  source: function() {return that.reverseAll(["hi", "bye"])},
			});
		},
		
		reverseAll : function(array) {
		  var newArray = [];
		  array.forEach(function(item) {
		    newArray.push(item.split("").reverse().join(""));
		  })
		  return newArray;
		}
		
	})
	return Router;

});