'use strict';

/**
 * @ngdoc function
 * @name meatlessinseattleApp.controller:SearchResultsCtrl
 * @description
 * # SearchResultsCtrl
 * Controller of the meatlessinseattleApp
 */
angular.module('meatlessinseattleApp')
  .controller('SearchResultsCtrl', function ($scope) {
    $scope.current = current.query();
  });
