'use strict';

angular.module("myTube.watchvid",[])
	.controller('watchvidCtrl', ['$scope', '$routeParams', '$sce', function($scope, $routeParams, $sce){
		$scope.trustSrc = function(src) {
    		return $sce.trustAsResourceUrl(src);
    	};
		$scope.movieId = $routeParams.id;
		$scope.video_src = 'http://www.youtube.com/embed/{ID}?autoplay=1'.replace('{ID}', $routeParams.id);
		$scope.video_poster = 'https://i1.ytimg.com/vi/{ID}/hqdefault.jpg'.replace('{ID}', $routeParams.id);
	}]);