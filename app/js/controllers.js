'use strict';

var spacecatControllers = angular.module('spacecatControllers', []); // array would have any dependencies

spacecatApp.controller('CatListCtrl', ['$scope', '$http', 
  function($scope, $http){
    $http.get('cats/cats.json').success(function(data){
      $scope.cats = data;
    });
    $scope.orderProp = 'name';
}]);

spacecatApp.controller('CatDetailCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams){
    $http.get('cats/cats-' + $routeParams.catId + '.json').success(function(data) {
      $scope.cat = data[0];
    });
}]);