'use strict';

describe('Controller: RecipedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('meatlessinseattleApp'));

  var RecipedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipedetailCtrl = $controller('RecipedetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecipedetailCtrl.awesomeThings.length).toBe(3);
  });
});
