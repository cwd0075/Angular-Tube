'use strict';

angular.module("myTube.citylist",[])
	.controller('citylistCtrl', ['$scope', 'getCities', function($scope, getCities){
		
    	getCities().then(function(results) {
        	$scope.cityList = results;
     	});

	}]);
