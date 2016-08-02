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
    function($scope, $routeParams, WeatherApi, CitySynchronizor) {
      $scope.city = CitySynchronizor.city;
      $scope.days = $routeParams.days || 2;

      var convertDate = function(epoch_ts) {
        return moment.unix(epoch_ts).format("dddd, MMMM Do YYYY");
      };

      var convertHour = function(epoch_ts) {
        return moment.unix(epoch_ts).format("HH:mm");
      };

      var truncate_weathers = function(weathers, days) {
        var truncated_weathers = {},
          count = 0;
        for (var date in weathers) {
          if (count < days) {
            truncated_weathers[date] = weathers[date];
            count += 1;
          } else {
            break;
          }
        }
        $scope.displayed_weathers = truncated_weathers;
      };

      var extract_forecast_info = function(hourly_forecast) {
        return {
          'date': convertDate(hourly_forecast.dt),
          'hour': convertHour(hourly_forecast.dt),
          'main_weather': hourly_forecast.weather[0].main,
          'max_temp': hourly_forecast.main.temp_max,
          'min_temp': hourly_forecast.main.temp_min,
          'cloudiness': hourly_forecast.clouds.all
        };
      };

      var extract_daily_forecasts = function(brute_data) {
        var forecasts = brute_data.list;
        var date, clean_w, hourly_forecast, weathers = {};
        for (var w in forecasts) {
          hourly_forecast = forecasts[w];
          date = convertDate(hourly_forecast.dt);
          clean_w = extract_forecast_info(hourly_forecast);
          if (date in weathers) {
            weathers[date].push(clean_w);
          } else {
            weathers[date] = [clean_w];
          }
        }
        return weathers;
      };

      WeatherApi.get({
          q: $scope.city,
          cnt: 38,
          units: "metric",
          APPID: 'be6aaf9aed3fccc9c2efb29f732bc369'
        }).$promise
        .then(extract_daily_forecasts)
        .then(function(value) {
          return truncate_weathers(value, $scope.days);
        });

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
    }
  ]);
