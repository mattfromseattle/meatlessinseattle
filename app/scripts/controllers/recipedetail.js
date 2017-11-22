'use strict';

/**
 * @ngdoc function
 * @name meatlessinseattleApp.controller:RecipedetailCtrl
 * @description
 * # RecipedetailCtrl
 * Controller of the meatlessinseattleApp
 */
angular.module('meatlessinseattleApp')
  .controller('RecipedetailCtrl', function ($scope,recipeid) {
    // Begin recipe search functionality
    $scope.recipedetail = recipeid.find();

       $scope.recipeDetails = function(){
         $scope.recipedetail = recipeid.find({
           recipeId: $scope.recipeId
         });
         $scope.searchQuery = $scope.recipeId;
       };
  });
