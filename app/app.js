'use strict';

angular.module("myTube", [
	'ngRoute',
	'720kb.datepicker',
	'myTube.videolist',
	'myTube.citylist',
	'myTube.watchvid',
	'myTube.modelservices'
	])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when("/", {templateUrl: "videolist/videolist.html", controller: "videolistCtrl"}).
		when("/watch/:id", {templateUrl: "watchvid/watchvid.html", controller: "watchvidCtrl"}).
		when("/city/:xy", {templateUrl: "videolist/videolist.html", controller: "citylistCtrl"}).
		otherwise({redirectTo: "/"});
}])
.controller('SearchFormCtrl',['$scope', '$log', 'searchDate', function($scope, $log, searchDate){
	$scope.search = function(){
		searchDate.after = $scope.dateafter;
		searchDate.before = $scope.datebefore;
		$log.info(searchDate.after);
		$log.info(searchDate.before);
	};

}]);
