'use strict';

/**
 * @ngdoc function
 * @name weatherForecastApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the weatherForecastApp
 */
angular.module('weatherForecastApp')
  .controller('HomeCtrl', ['$scope', '$location', 'CitySynchronizor',
    function($scope, $location, CitySynchronizor) {
      $scope.city = CitySynchronizor.city;
      $scope.homeBody = true;
      $scope.$watch('city', function() {
        CitySynchronizor.city = $scope.city;
      });
      $scope.submit = function() {
        $location.path("/forecast");
      };

    }
  ]);
