'use strict';

describe('Service: WeatherApi', function () {

  // load the service's module
  beforeEach(module('weatherForecastApp'));

  // instantiate service
  var WeatherApi;
  beforeEach(inject(function (_WeatherApi_) {
    WeatherApi = _WeatherApi_;
  }));

  it('should do something', function () {
    expect(!!WeatherApi).toBe(true);
  });

});
