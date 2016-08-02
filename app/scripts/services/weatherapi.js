'use strict';

/**
 * @ngdoc service
 * @name weatherForecastApp.WeatherApi
 * @description
 * # WeatherApi
 * Factory in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .factory('WeatherApi', ['$resource', function ($resource) {
    var service = {};

    var get_params = function(city){
      return {
        q: city,
        cnt: 38,
        units: "metric",
        APPID: 'be6aaf9aed3fccc9c2efb29f732bc369'
      }
    };

    var convertDate = function (epoch_ts) {
      return moment.unix(epoch_ts).format("dddd, MMMM Do YYYY");
    };

    var convertHour = function (epoch_ts) {
      return moment.unix(epoch_ts).format("HH:mm");
    };

    var extract_forecast_info = function (hourly_forecast) {
      return {
        'date': convertDate(hourly_forecast.dt),
        'hour': convertHour(hourly_forecast.dt),
        'main_weather': hourly_forecast.weather[0].main,
        'max_temp': hourly_forecast.main.temp_max,
        'min_temp': hourly_forecast.main.temp_min,
        'cloudiness': hourly_forecast.clouds.all
      };
    };

    var truncate_weathers = function (weathers, days) {
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
      return truncated_weathers;
    };

    var extract_daily_forecasts = function (brute_data) {
      var forecasts = brute_data.list;
      var date, clean_w, hourly_forecast, weathers = {};
      for (var w in forecasts) {
        if (forecasts.hasOwnProperty(w)) {
          hourly_forecast = forecasts[w];
          date = convertDate(hourly_forecast.dt);
          clean_w = extract_forecast_info(hourly_forecast);
          if (date in weathers) {
            weathers[date].push(clean_w);
          } else {
            weathers[date] = [clean_w];
          }
        }
      }
      return weathers;
    };

    service.get = function (city, days) {
      return $resource('http://api.openweathermap.org/data/2.5/forecast', {
        callback: "JSON_CALLBACK"
      }, {
        get: {
          method: 'JSONP'
        }
      }).get(get_params(city)).$promise.then(function(raw_weathers){
        var weathers = extract_daily_forecasts(raw_weathers);
        return truncate_weathers(weathers, days);
      });
    };

    return service;
  }]);
