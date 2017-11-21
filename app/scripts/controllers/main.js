'use strict';

/**
 * @ngdoc function
 * @name meatlessinseattleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meatlessinseattleApp
 */
angular.module('meatlessinseattleApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query(); //Displays recipes on main.html page as Featured Recipes
  });
