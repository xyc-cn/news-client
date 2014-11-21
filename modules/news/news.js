define(['jquery', 'underscore', 'backbone', 'text!modules/news/newsView.html', 'text!modules/news/ViewContent.html'],
 function ($, _, Backbone, newsTemplate ,contentView) {
    var listView = Backbone.View.extend({
        template: _.template(newsTemplate),
         initialize: function () {
             this.model.bind('successfetch', this.appendData, this);
         },
        events:{
            'pagecreate ':'fetchData',
        },
        render: function () {
            $(this.el).append(this.template());
            return this;
        },
        fetchData:function(){
            this.model.fetch(this);
        },
        appendData:function(){
            var content = _.template(contentView)
            $.mobile.loading( "hide" );
            $(this.el).find('#news').append(content({ data: this.model.toJSON() }));
        }

    });
    return listView;
});