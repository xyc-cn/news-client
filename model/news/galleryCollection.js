define(['jquery', 'underscore', 'backbone', 'model/news/gallery','url'], function ($, _, Backbone, Gallery,URL) {
    var Newss = Backbone.Collection.extend({
        model: Gallery,
        url: URL.galleryList,
        fetch: function () {
            var self = this;
            var tmpNews;
            var jqxhr = $.getJSON(self.url)
              .success(function (data, status, xhr) {
                $.each(data, function (i, item) {
                      tmpNews = new Gallery({ id: item.id, name: item.name ,url:item.url});
                      self.add(tmpNews);
                  });
                self.trigger("successfetch", this, "");
              })
        }
    });
    return Newss;
});