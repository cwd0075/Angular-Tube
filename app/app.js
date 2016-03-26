'use strict';

angular.module("myTube", [
	'myTube.videolist',
	'myTube.modelservices'
	]).
config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when("/", {templateUrl: "videolist/videolist.html", controller: "videolistCtrl"}).
		otherwise({redirectTo: "/"});
}]);
