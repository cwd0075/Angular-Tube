'use strict';
angular.module("myTube.modelservices",[])
	.constant('YT_EMBED_URL',   'http://www.youtube.com/embed/{ID}?autoplay=1')
	.constant('YT_VIDEO_URL',   'https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&key=AIzaSyCl3iyhmnx5ZUPKoVoDSJWNyJEdZi1jNR4&type=video&maxResults=48&q=')
	//'https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&key=AIzaSyCl3iyhmnx5ZUPKoVoDSJWNyJEdZi1jNR4&type=video&maxResults=48&q=&publishedAfter=2016-02-01T00%3A00%3A00Z&publishedBefore=2016-02-14T00%3A00%3A00Z&locationRadius=25km&location=10.766667%2C+106.716667'
	.factory('getVideos', ['$http', '$q', '$log', function($http, $q, $log){
		return function(url){
			var defer = $q.defer();

			$http.get(url,{
		        params: {
		          type: 'video',
		          fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/high'
		        	}
		      	})
				.success(function(response){

					var results = [];
		          	angular.forEach(response.items, function(entry) {
		             results.push(ytVideoPrepare(entry));
		            });
		          $log.info(response);
		          defer.resolve(results);
		         
		 		});
			return defer.promise;
		};
	}])
	.factory('ytVideoPrepare',['ytCreateEmbedURL', function(ytCreateEmbedURL){
		return function(entry){
	      var id          = entry.id.videoId;
	      var thumbnails  = [];

	      var hqVideo;
	      //angular.forEach($media.media$thumbnail || [], function(thumb) {
	        var image = {
	          width : entry.snippet.thumbnails.high.width,
	          height : entry.snippet.thumbnails.high.height,
	          url : entry.snippet.thumbnails.high.url,
	          name : 'high'
	        };
	        
	        thumbnails.push(image);
	      

	      return {
	        id : id,
	        image : thumbnails[0],
	        thumbnails : thumbnails,
	        title : entry.snippet.title,
	        description : entry.snippet.description,
	        rating : 0,
	        keywords : 'keywords',
	        embedUrl : ytCreateEmbedURL(id)
	      }
		};

	}])	
	.factory('ytCreateEmbedURL',['YT_EMBED_URL', function(YT_EMBED_URL){
		return function(id){
			return YT_EMBED_URL.replace('{ID}', id);
		};
	}]);

	// factory prototype
	// .factory('factoryName',['injectDep', function(injectDep){
	// 	return function(Argument){
	// 		return obj;
	// 	};
	// }]);

     
