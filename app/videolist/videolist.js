'use strict';

angular.module("myTube.videolist",[])
	.controller('videolistCtrl', ['$scope', '$http', '$log', function($scope, $http, $log){
		var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&key=IzaSyCl3iyhmnx5ZUPKoVoDSJWNyJEdZi1jNR4&type=video&maxResults=48&q=';
		$http.get(url,{
        params: {
          type: 'video',
          fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/high'
        	}
      	})
		.success(function(data){

			var results = [];
           angular.forEach(response.items, function(entry) {
             results.push(ytVideoPrepare(entry));
            });
          $log.info(response);
          $scope.videos=results;
 		});

 	function ytVideoPrepare(entry) {
      //var $media      = entry.media$group;
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

     function ytCreateEmbedURL(id) {
      var YT_EMBED_URL = 'http://www.youtube.com/embed/{ID}?autoplay=1';
      return YT_EMBED_URL.replace('{ID}', id);
    }

	}])


//  https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&key=AIzaSyCl3iyhmnx5ZUPKoVoDSJWNyJEdZi1jNR4&type=video&maxResults=48&q=&publishedAfter=2016-02-01T00%3A00%3A00Z&publishedBefore=2016-02-14T00%3A00%3A00Z&locationRadius=25km&location=10.766667%2C+106.716667
//  https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&key=AIzaSyCl3iyhmnx5ZUPKoVoDSJWNyJEdZi1jNR4&type=video&maxResults=48&q=

// angular.module("movieDB.catalog",[])
// 	.controller('catalogCtrl', ['$scope', '$http', function($scope, $http){
// 		$http.get('json/movies.json').success(function(data){
// 			$scope.movieList=data;
// 		});
// 	}])
	

	// .factory('ytVideos', ['$q', '$http', 'ytVideoPrepare',
 //                function($q,   $http,   ytVideoPrepare) {
 //    return function(url) {
 //      var defer = $q.defer();
 //      $http.jsonp(url)
 //        .success(function(response) {
 //          var results = [];
 //          angular.forEach(response.feed.entry, function(entry) {
 //            results.push(ytVideoPrepare(entry));
 //          });
 //          defer.resolve(results);
 //        })
 //        .error(function() {
 //          return 'failure';
 //        });
 //      return defer.promise;
 //    };
 //  }])


 // .factory('ytVideos', ['$q', '$log', '$http', 'ytVideoPrepare',
 //                function($q,  $log, $http,   ytVideoPrepare) {
 //    return function(url) {
 //      var defer = $q.defer();
 //      $log.info(url);
 //      $http.get(url,{
 //        params: {
 //          type: 'video',
 //          fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/high'
 //        }
 //      }
 //        )
 //        .success(function(response) {
 //           var results = [];
 //           angular.forEach(response.items, function(entry) {
 //             results.push(ytVideoPrepare(entry));
 //            });
 //          $log.info(response);
          
 //          defer.resolve(results);
 //        })
 //        .error(function() {
 //          return 'failure';
 //        });
 //      return defer.promise;
 //    };
 //  }])