'use strict';

/**
 * @ngdoc directive
 * @name weatherForecastApp.directive:searchResult
 * @description
 * # searchResult
 */
angular.module('weatherForecastApp')
  .directive('searchResult', function() {
    return {
      templateUrl: 'views/partials/search_result.html',
      restrict: 'EA',
      scope: {
        weather: '=',
        weatherimage: '='
      }
    };
  });
