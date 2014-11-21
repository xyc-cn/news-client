define([],
	function(URL) {
		var gallery = Backbone.Model.extend({
			defaults: {
				id: "",
				name:"",
				url: ""
			}
		})

	return gallery;
	}
)