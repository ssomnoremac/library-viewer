'use strict';

angular.module('myApp.view1', ['ngRoute','ngResource'])

.factory('Books', function($resource) {
  return $resource('catalog2.json', null,
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
    Books.query(function(data){
      $scope.booklist = data;
      // create a list of languages
      var languageList = [];
      data.books.forEach(function(book){
        if (book.doc.languages){
          book.doc.languages.forEach(function(lang){
            languageList.push(lang);
          });
        }
      });
      // remove duplicates
      var uniqueLanguageList = languageList.filter(function(elem, pos) {
          return languageList.indexOf(elem) == pos;
        }); 
      $scope.languages = uniqueLanguageList;
      $scope.predicate = 'doc.name';
      $scope.languageButtonTitle = 'Language';
      $scope.updateLanguage = function(selectedLanguage) {
        $scope.languageButtonTitle = selectedLanguage;
        $scope.filterLanguage = selectedLanguage;
        $scope.languageSelected = "selected";
      };
      $scope.collapsed = false;
    });
}]);