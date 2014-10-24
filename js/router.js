define(['jquery', 'underscore', 'backbone', 'modules/index/index', 'modules/list/list', 'jqm'],
	function ($, _, Backbone, index, list) {
	    var Router = Backbone.Router.extend({
	        routes: {
	            '': 'Index',
	            'index': 'Index',
	            'list': 'List'
	        },
	        firstPage: true,
	        Index: function (actions) {
	            this.changePage(new index());
	        },
	        List: function (actions) {
	            this.changePage(new list());
	        },
	        changePage: function (page) {
	            page.render();
	            $(page.el).attr('data-role', 'page');
	            $('body').append($(page.el));
	            var transition = $.mobile.defaultPageTransition;
	            if (!this.firstPage) {
	                $.mobile.changePage($(page.el), { changeHash: false, transition: transition });
	            } else {
	                this.firstPage = false;
	            }
	        }
	    });
	    return Router;
	});