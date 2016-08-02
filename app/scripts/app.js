'use strict';

/**
 * @ngdoc overview
 * @name weatherForecastApp
 * @description
 * # weatherForecastApp
 *
 * Main module of the application.
 */
angular
  .module('weatherForecastApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/forecast', {
        templateUrl: 'views/forecast.html',
        controller: 'ForecastCtrl',
        controllerAs: 'forecast'
      })
      .when('/forecast/:days', {
        templateUrl: 'views/forecast.html',
        controller: 'ForecastCtrl',
        controllerAs: 'forecast'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
