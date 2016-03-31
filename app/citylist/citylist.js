'use strict';

angular.module("myTube.city.list",[])
	.controller('citylistCtrl', ['$scope', 'getCities', function($scope, getCities){
		
    	getCities().then(function(results) {
        	$scope.cityList = results;
     	});

	}]);
