'use strict';

angular.module('myApp.view1', ['ngRoute','ngResource'])

.factory('Books', function($resource) {
  return $resource('catalog.json', {Id:'@id'},
       {
       'query':  {method:'GET', isArray:false}
       }
)})

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','Books',
  function($scope, Books){
    $scope.books = Books.query();
}]);