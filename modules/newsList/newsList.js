define(['jquery', 'underscore', 'backbone', 'text!modules/newsList/newsListView.html', 'text!modules/newsList/listViewContent.html'],
 function ($, _, Backbone, newsListTemplate ,contentView) {
    var listView = Backbone.View.extend({
        template: _.template(newsListTemplate),
         initialize: function () {
             this.collection.bind('successfetch', this.appendData, this);
         },
        events:{
            'pagecreate ':'fetchData',
            'tap #newslist li':'nav'
        },
        render: function () {
            $(this.el).append(this.template());
            return this;
        },
        nav:function(event){
                var id = $(event.target).attr('alt');
                Backbone.history.navigate("news/id="+id,{trigger:true})
        },
      
        fetchData:function(){
            this.collection.fetch(this);
        },
        appendData:function(data){
            var content = _.template(contentView)
            $.mobile.loading( "hide" );
            $(this.el).find('#news').append(content({ data: this.collection.toJSON() }));
            $(this.el).trigger('create');
        }

    });
    return listView;
});