'use strict';

/**
 * @ngdoc service
 * @name weatherForecastApp.WeatherApi
 * @description
 * # WeatherApi
 * Factory in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .factory('WeatherApi', ['$resource', function($resource) {
    return $resource('http://api.openweathermap.org/data/2.5/forecast', {
      callback: "JSON_CALLBACK"
    }, {
      get: {
        method: 'JSONP'
      }
    });
  }]);
