'use strict';

/**
 * @ngdoc service
 * @name weatherForecastApp.CitySynchronizor
 * @description
 * # CitySynchronizor
 * Service in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .service('CitySynchronizor', function() {
    this.city = "";
  });
