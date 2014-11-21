define(['jquery', 'underscore', 'backbone', 'model/news/newsModel','url'], function ($, _, Backbone, News,URL) {
    var Newss = Backbone.Collection.extend({
        type : "",
        page : "",
        setType:function(type){
            this.type = type;
        },
        setPage:function(page){
            this.page = page;
        },
        model: News,
        url: URL.newsList,
        fetch: function () {
            var self = this;
            var tmpNews;
            var jqxhr = $.getJSON(self.url+"?"+this.type+"&"+this.page)
              .success(function (data, status, xhr) {
                $.each(data.rows, function (i, item) {
                      tmpNews = new News({ id: item.id, title: item.title ,content:item.content});
                      self.add(tmpNews);
                  });
                self.trigger("successfetch", this, "");
              })
        }
    });
    return Newss;
});