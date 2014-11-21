define(['jquery', 'underscore', 'backbone','router', 'jqmconfig'],
	function ($, _, Backbone, Router) {
	    var init = function () {
	    	var cur = window.location.href;
	            	if(cur.split('#')[1]!=null){
	            		sessionStorage.setItem("from",cur.split('#')[1]);
	            		myhistory.push(cur.split('#')[1]);
	            		myhistory.push(cur.split('#')[1]);
	            	}
	            	else{
	            		sessionStorage.setItem('from',"");
	            		myhistory.push("index");
	            		myhistory.push("index");
	        }
			
	        var router = new Router();
	        Backbone.history.start();
	     
	    };
	    return {
	        initialize: init
	    }
	});