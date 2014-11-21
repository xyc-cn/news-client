define(['jquery', 'underscore', 'backbone','modules/index/index','model/news/galleryCollection','model/news/newsModel', 
	'modules/news/news','model/news/newsCollection', 'modules/newsList/newsList','jqm'],
	function ($, _, Backbone, index, GalleryCollection ,News,newsView,NewsCollection,NewsListView) {
	    var Router = Backbone.Router.extend({
	        routes: {
	            '': 'index',
	            'index': 'index',
	            'list': 'list',
	            'news/:id':'news',
	            'test/:id':'test',
	            'newslist/:type/:page':'newslist'
	        },
	        firstPage: true,
	        index: function (actions) {
	        	var galleryCollection = new GalleryCollection()
	        	var indexView = new index({collection:galleryCollection});
	        	indexView.render();
	            this.changePage(indexView,'index');
	        },
	       
	        news: function (id) {
	        	
	        	var news = new News();
	        	news.set('id',id);
	        	var Views = new newsView({model:news});
	        	Views.render();
	        	this.changePage(Views,'news/'+id);
	        	$.mobile.loading('show', {
					
				});
	        	//Views.bind('renderNews',  this.triggerChangeView, this);
	        	//news.fetch(id);
	            
	        },
	        newslist:function(type,page){
	        	 var newsList = new NewsCollection();
	        	 newsList.setType(type);
	        	 newsList.setPage(page);
	        	 var newsListView = new NewsListView({collection:newsList});
	        	 newsListView.render();
	        	 this.changePage(newsListView,'newslist/'+type+'/'+page)
	        },
	        changePage: function (view,to) {

	       		
	            $(view.el).attr('data-role', 'page');
	            $('body').append($(view.el));
	            var transition = $.mobile.defaultPageTransition;
	            if (!this.firstPage) {
	            	var cur = myhistory.pop();
		        	var last = myhistory.pop();
		        	if(last == to){
		        		myhistory.push(last);
		        		$.mobile.changePage($(view.el), { changeHash: false, transition: transition ,reverse:true});
		        	}
		        	else{
		        		$.mobile.changePage($(view.el), { changeHash: false, transition: transition });
		        		myhistory.push(last);
		        		myhistory.push(cur);
		        		myhistory.push(to);
		        	}
	            	
	            } else {
	            	
	                this.firstPage = false;
	            }
	        }
	    });
	    return Router;
	});