'use strict';

angular.module("myTube.videolist",[])
	.controller('videolistCtrl', ['$scope', 'getVideos', 'YT_VIDEO_URL', function($scope, getVideos, YT_VIDEO_URL){
		var url = YT_VIDEO_URL; // todo: need to move url back in services.js later
    	getVideos(url).then(function(results) {
        	$scope.videos = results;
     	});

	}]);

// Todo:

// Click to create movie view page

// Todo2:
// Add country list on right panel
// Add Unit testing

