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
    console.log(current);
    recipedetail.setRecipeId($routeParams.recipeid.replace(/:/g, ''));
    $scope.recipeDetail = recipedetail.getRecipe();
    console.log('scope val ', $scope.recipeDetail);
  })
