requirejs.config({
	paths: {
		jquery:'/lib/jquery',
		underscore:'/lib/underscore-min',
		backbone:'/lib/backbone',
		templates:'/templates',
		text:'/lib/text'
	},
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

define(['jquery', 'backbone', 'underscore', 'mv'], function($, Backbone, _, mv) {
	mv.initialize();
});
