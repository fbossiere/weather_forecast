'use strict';

/**
 * @ngdoc function
 * @name weatherForecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherForecastApp
 */
angular.module('weatherForecastApp')
  .controller('ForecastCtrl', ['$scope', 'WeatherApi', 'CitySynchronizor', function($scope, WeatherApi, CitySynchronizor) {
    $scope.city = CitySynchronizor.city;

    $scope.weatherAPIResults = WeatherApi.get({
      q: $scope.city,
      cnt: 40,
      units: "metric",
      APPID: 'be6aaf9aed3fccc9c2efb29f732bc369'
    });

    $scope.convertDate = function(epoch_ts) {
      console.log(epoch_ts);
      return moment.unix(epoch_ts).format("MMMM Do YYYY");
    };

    $scope.convertHour = function(epoch_ts) {
      console.log(epoch_ts);
      return moment.unix(epoch_ts).format("MMMM Do YYYY, HH:mm");
    };

    $scope.weatherImage = function(weather) {
      if (weather === 'Clear') {
        return 'sun.png';
      } else if (weather === 'Rain') {
        return 'rain.png';
      } else if (weather === 'Clouds') {
        return 'clouds.png';
      }
      return 'yeoman.png';
    };
  }]);
