'use strict';

/**
 * @ngdoc function
 * @name weatherForecastApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the weatherForecastApp
 */
angular.module('weatherForecastApp')
  .controller('HomeCtrl', ['$scope', 'CitySynchronizor', function($scope, CitySynchronizor) {
    $scope.city = CitySynchronizor.city;
    $scope.$watch('city', function() {
      CitySynchronizor.city = $scope.city;
    });

  }]);
