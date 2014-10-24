define(['jquery', 'underscore', 'backbone', 'text!modules/index/indexView.html'],
function ($, _, Backbone, indexViewTemplate,Router) {
    var indexView = Backbone.View.extend({
    	
        template: _.template(indexViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        },
        events:{
        	'tap #test':'tapHandler',
        },
        tapHandler:function( event ){
				Backbone.history.navigate("list",{trigger:true})


		},
		
    });
    return indexView;
});