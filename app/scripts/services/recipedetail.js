'use strict';

/**
 * @ngdoc service
 * @name meatlessinseattleApp.recipedetail
 * @description
 * # recipedetail
 * Factory in the meatlessinseattleApp.
 */
angular.module('meatlessinseattleApp')
  .factory('recipedetail', function($resource) {
    // Service logic
    var recipeId = 'Homemade-Cranberry-Sauce-2268614'; //default recipe to load

    function setRecipeId(id) {
      recipeId = id;
      console.log('set ', recipeId);
    };

    function getRecipe() {
      var Recipe = $resource('http://api.yummly.com/v1/api/recipe/' + recipeId + '?_app_id=2c7ef7da&_app_key=3ee37a374773a7feda327bb47a8b00d5', {});
      return Recipe.get({}, function() {
        console.log('recipe got');
      });
    };

    return {
      setRecipeId: setRecipeId,
      getRecipe: getRecipe
    }
  });
