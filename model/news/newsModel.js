define(['url'],
	function(URL) {
		var news = Backbone.Model.extend({
			defaults: {
				id: "",
				title: '',
				content: '',
				author: ''
			},
			url: URL.newsModel,
			fetch: function() {

				var self = this;
				var jqxhr = $.getJSON(this.url+'?'+this.id)
					.success(function(data, status, xhr) {
						self.set({
							id: data.id,
							title: data.title,
							content: data.content,
							author: data.desc
						});
						
						self.trigger("successfetch", this, "");
					}).fail(function(){

					})
			}
		})

	return news;
	}
)