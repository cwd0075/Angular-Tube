'use strict';

angular.module("myTube.videolist",[])
	.controller('videolistCtrl', ['$scope', 'getVideos', function($scope, getVideos){
		
    	getVideos().then(function(results) {
        	$scope.videos = results;
     	});

	}]);

// Todo:

// Click to create movie view page

// Todo2:
// Add country list on right panel
// Add Unit testing

