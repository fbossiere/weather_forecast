'use strict';

/**
 * @ngdoc function
 * @name weatherForecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherForecastApp
 */

angular.module('weatherForecastApp')
  .controller('ForecastCtrl', ['$scope', '$routeParams', 'WeatherApi', 'CitySynchronizor',
    '$routeParams',
    function ($scope, $routeParams, WeatherApi, CitySynchronizor) {
      $scope.city = CitySynchronizor.city;
      $scope.days = $routeParams.days || 2;
      console.log($scope.city, $scope.days);
      
      WeatherApi.get($scope.city, $scope.days).then(function(weathers){
        $scope.displayed_weathers = weathers;
      });

      $scope.weatherImage = function (weather) {
        if (weather === 'Clear') {
          return 'sun.png';
        } else if (weather === 'Rain') {
          return 'rain.png';
        } else if (weather === 'Clouds') {
          return 'clouds.png';
        }
        return 'yeoman.png';
      };
    }
  ]);
