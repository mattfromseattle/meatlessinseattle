'use strict';

describe('Service: recipesearch', function () {

  // load the service's module
  beforeEach(module('meatlessinseattleApp'));

  // instantiate service
  var recipesearch;
  beforeEach(inject(function (_recipesearch_) {
    recipesearch = _recipesearch_;
  }));

  it('should do something', function () {
    expect(!!recipesearch).toBe(true);
  });

});
