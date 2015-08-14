'use strict';

angular.module('angularSvg',[]).directive('includeSvg', function() {
      return {
        restrict: 'E',
        replace: true,
        scope: {
          addClasses: '@'
        },
        templateUrl: "/app/templates/include-svg-template.html"
      };
    });

angular.module('angularSvg').directive('includeReplace', function () {
  return {
    require: 'ngInclude',
    scope: {
      addClasses: '@'
    },
    link: function (scope, el, attrs) {
      var child = el.children();
      el.replaceWith(child);
      child.addClass(scope.addClasses);
      console.log('addind classes %s', scope.addClasses);
    }
  };
});

//angular.module('angularSvg').directive('addClasses', function () {
//  return {
//    require: 'includeReplace',
//    scope: {
//      classes: '@'
//    },
//    link: function (scope, el, attrs) {
//
//    }
//  };
//});

var app = angular.module('examplesApp', [
  'ngRoute',
  'angularSvg'
]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main.html',
        controller: 'MainCtrl'
      });
    $locationProvider.html5Mode(true);
  });

app.controller('MainCtrl', function ($scope) {
  $scope.tmpe = "template.html";

  });


