'use strict';

/**
 * @ngdoc function
 * @name meatlessinseattleApp.controller:RecipedetailCtrl
 * @description
 * # RecipedetailCtrl
 * Controller of the meatlessinseattleApp
 */
angular.module('meatlessinseattleApp')
  .controller('RecipedetailCtrl', function ($scope, $routeParams, current, recipedetail) {
    // Begin recipe search functionality
    
    $scope.recipedeID = $routeParams.recipeID;

    $scope.recipeDetail = recipedetail.query({
      recipeID: $routeParams.recipeID
    });
  })
