'use strict';

describe('Service: recipedetail', function () {

  // load the service's module
  beforeEach(module('meatlessinseattleApp'));

  // instantiate service
  var recipedetail;
  beforeEach(inject(function (_recipedetail_) {
    recipedetail = _recipedetail_;
  }));

  it('should do something', function () {
    expect(!!recipedetail).toBe(true);
  });

});
