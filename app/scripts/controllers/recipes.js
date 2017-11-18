'use strict';

/**
 * @ngdoc function
 * @name meatlessinseattleApp.controller:RecipesCtrl
 * @description
 * # RecipesCtrl
 * Controller of the meatlessinseattleApp
 */
angular.module('meatlessinseattleApp')
  .controller('RecipesCtrl', function ($scope,current) {
    $scope.current = current.query();
  });
