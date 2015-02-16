'use strict';

angular.module('myApp.view1', ['ngRoute','ngResource'])

.factory('Books', function($resource) {
  return $resource('catalog.json', null,
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
    $scope.expo = {};
    // function to handle click event and toggle "expanded" class of library items
    $scope.expand = function (id){
      if($scope.expo[id]) {
        $scope.expo[id] = false;
      } else {
        $scope.expo[id] = true;
      }
    };
    // create a prommise to return a filtered array from Book resource
    var promise = new Promise(function(resolve,reject,data){
      Books.query(function(data){
        var bookArray = [];
        var keys = Object.keys(data);
        for (var i = 0; i < keys.length; i++) {
          bookArray[i] = data[keys[i]];
        } 
        $scope.booklist = bookArray;
        if(bookArray){
          resolve(bookArray);
        }
        else{
          reject();
        }
      });
    });
    // once the array is built, work with it
    promise.then(function(result){
      // create a list of languages
        var languageList = [];
        result.forEach(function(book){
          if (book.doc){
            book.doc.languages.forEach(function(lang){
              languageList.push(lang);
            });
          }
        });
      // remove duplicates
        var uniqueLanguageList = languageList.filter(function(elem, pos) {
            return languageList.indexOf(elem) == pos;
          }, function(){
            $scope.languages = uniqueLanguageList;
            $scope.predicate = 'doc.name';
            $scope.languageButtonTitle = 'Language';
            $scope.updateLanguage = function(selectedLanguage) {
              $scope.languageButtonTitle = selectedLanguage;
              $scope.filterLanguage = selectedLanguage;
              $scope.languageSelected = "selected";
            };
          });
        $scope.collapsed = false;
    });
  }
]);