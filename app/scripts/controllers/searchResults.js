'use strict';
/**
 * @ngdoc function
 * @name meatlessinseattleApp.controller:SearchResultsCtrl
 * @description
 * # SearchResultsCtrl
 * Controller of the meatlessinseattleApp
 */

angular.module('meatlessinseattleApp')
    .controller('SearcchResultsCtrl', function($scope, current) {
        //$scope.current = current.query();

        $scope.recipesFound = recipesearch.find();

        $scope.findRecipes = function() {
            $scope.recipesFound = recipesearch.find({
                query: $scope.ingredients
            });
            $scope.searchQuery = $scope.ingredients;
        };
    });