'use strict';

describe('Service: CitySynchronizor', function () {

  // load the service's module
  beforeEach(module('weatherForecastApp'));

  // instantiate service
  var CitySynchronizor;
  beforeEach(inject(function (_CitySynchronizor_) {
    CitySynchronizor = _CitySynchronizor_;
  }));

  it('should do something', function () {
    expect(!!CitySynchronizor).toBe(true);
  });

});
