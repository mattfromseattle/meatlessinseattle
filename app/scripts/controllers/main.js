'use strict';

/**
 * @ngdoc function
 * @name meatlessinseattleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meatlessinseattleApp
 */
angular.module('meatlessinseattleApp')
  .controller('MainCtrl', function ($scope, current, recipesearch) {
    $scope.current = current.query(); //Displays recipes on main.html page as Featured Recipes

// Begin recipe search functionality
    $scope.recipesFound = recipesearch.find();

    $scope.findRecipes = function(){
      $scope.recipesFound = recipesearch.find({
        query: $scope.allowedIngredient
      });
      $scope.searchQuery = $scope.recipe;
    };
  });
