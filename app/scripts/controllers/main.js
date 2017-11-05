'use strict';

/**
 * @ngdoc function
 * @name meatlessinseattleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meatlessinseattleApp
 */
angular.module('meatlessinseattleApp')
  .controller('MainCtrl', function ($scope, current, recipes) {
    $scope.current = current.query();
  });
