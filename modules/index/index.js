
define(['jquery', 'underscore', 'backbone', 'text!modules/index/indexView.html', 'text!modules/index/galleryView.html'],
function ($, _, Backbone, indexViewTemplate,GalleryView) {
    var indexView = Backbone.View.extend({
        initialize: function () {
             this.collection.bind('successfetch', this.appendData, this);
         },
        template: _.template(indexViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        },
        events:{

        	'tap #first':'first',
            'tap #second':'second',
            'tap #third':'third',
            'pagecreate':'fetchData'
        },
        first:function( event ){
			Backbone.history.navigate("newslist/type=0/page=0",{trigger:true})
		},
        second:function( event ){
            Backbone.history.navigate("newslist/type=1/page=0",{trigger:true})
        },
        third:function( event ){
            Backbone.history.navigate("newslist/type=2/page=0",{trigger:true})
        },
        fetchData:function(){
            this.collection.fetch();
        },
        appendData:function(){
            var content = _.template(GalleryView)
            $(this.el).find('#sliders').append(content({ data: this.collection.toJSON() }));
            console.log(this.collection.toJSON())
        }
		
    });
    return indexView;
});