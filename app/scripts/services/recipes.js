'use strict';

/**
 * @ngdoc service
 * @name meatlessinseattleApp.recipes
 * @description
 * # recipes
 * Factory in the meatlessinseattleApp.
 */
angular.module('meatlessinseattleApp')
  .factory('recipes', function ($resource) {
    // Service logic
    // ...

    return $resource('http://api.yummly.com/v1/api/recipe/Hearty-Vegan-Minestrone-with-Butternut-Squash-2238107?_app_id=2c7ef7da&_app_key=3ee37a374773a7feda327bb47a8b00d5', {}, {
      query: {
        method: 'GET',
        recipeID: "#",
        isArray:false
      }
    });
  });
