'use strict';

var spacecatApp = angular.module('spacecatApp', ['ngRoute', 'spacecatControllers']);

spacecatApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/cats', {
    templateUrl: 'partials/cat-list.html',
    controller: 'CatListCtrl'
  }).
  when('/cats/:catId', {
    templateUrl: 'partials/cat-detail.html',
    controller: 'CatDetailCtrl'
  }).
  otherwise({
    redirectTo: '/cats'
  });


}]);