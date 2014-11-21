define(
	function() {
    var host ="http://192.168.1.148:3800/"
	//var host ="http://localhost:3800/"
	var URL = {
		newsModel: host + "onediary",
		newsList:host + "diarylist",
		galleryList :host+"photo?page=0"
	}

	return URL;
	}
)