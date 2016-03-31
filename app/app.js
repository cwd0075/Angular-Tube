'use strict';

angular.module("myTube", [
	'ngRoute',
	'myTube.videolist',
	'myTube.citylist',
	'myTube.watchvid',
	'myTube.modelservices'
	]).
config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when("/", {templateUrl: "videolist/videolist.html", controller: "videolistCtrl"}).
		when("/watch/:id", {templateUrl: "watchvid/watchvid.html", controller: "watchvidCtrl"}).
		when("/city/:xy", {templateUrl: "videolist/videolist.html", controller: "citylistCtrl"}).
		otherwise({redirectTo: "/"});
}]);
