define(['jquery', 'underscore', 'backbone','router', 'jqmconfig'],
	function ($, _, Backbone, Router) {
	    var init = function () {
	        var router = new Router();
	        Backbone.history.start();
	    };
	    return {
	        initialize: init
	    }
	});