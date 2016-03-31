'use strict';

angular.module("myTube.videolist",[])
	.controller('videolistCtrl', ['$scope', 'getVideos', 'getCities', function($scope, getVideos, getCities){
		
    	getVideos().then(function(results) {
        	$scope.videos = results;
     	});

     	getCities().then(function(results) {
        	$scope.cityList = results;

	}]);



// Todo2:
// Add country list on right panel
// Add Unit testing

