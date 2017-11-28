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
    //$scope.recipedeID = $routeParams.recipeID;
console.log("recipeid ", $routeParams.recipeid);
console.log(current);
    $scope.recipeDetail = recipedetail.find({
      //recipeid: $routeParams.recipeid
    });
  })
