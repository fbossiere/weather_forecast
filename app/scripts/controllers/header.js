'use strict';

/**
 * @ngdoc function
 * @name weatherForecastApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the weatherForecastApp
 */
angular.module('weatherForecastApp')
  .controller('HeaderCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  }]);
