'use strict';

angular.module("myTube.videolist",[])
	.controller('videolistCtrl', ['$scope', 'getVideos', 'YT_VIDEO_URL', function($scope, getVideos, YT_VIDEO_URL){
		var url = YT_VIDEO_URL;
    getVideos(url).then(function(results) {
        $scope.videos = results;
     });

	}])

// Todo:
// Refactoring to a separate service, so the controller can use xxx.then()
// Refactor the url to constant
// Click to create movie view page

// Todo2:
// Add country list on right panel
// Add Unit testing

