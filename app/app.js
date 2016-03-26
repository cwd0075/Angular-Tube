'use strict';

angular.module("myTube", [
	'ngRoute',
	'myTube.videolist',
	'myTube.watchvid',
	'myTube.modelservices'
	]).
config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when("/", {templateUrl: "videolist/videolist.html", controller: "videolistCtrl"}).
		when("/watch/:id", {templateUrl: "watchvid/watchvid.html", controller: "watchvidCtrl"}).
		otherwise({redirectTo: "/"});
}]);
