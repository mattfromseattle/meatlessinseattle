'use strict';

/**
 * @ngdoc function
 * @name meatlessinseattleApp.controller:RecipesCtrl
 * @description
 * # RecipesCtrl
 * Controller of the meatlessinseattleApp
 */
angular.module('meatlessinseattleApp')
  .controller('RecipesCtrl', function ($scope,recipesearch) {
    // Begin recipe search functionality
     $scope.recipesFound = recipesearch.find();

        $scope.findRecipes = function(){
          $scope.recipesFound = recipesearch.find({
            allowedIngredient: $scope.allowedIngredient
          });
          $scope.searchQuery = $scope.allowedIngredient;
        };
  });
