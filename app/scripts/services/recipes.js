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

    return $resource('http://api.yummly.com/v1/api/recipe/Roasted-Brussels-with-Shallots_-Maple-_-Mustard-2246266?_app_id=2c7ef7da&_app_key=3ee37a374773a7feda327bb47a8b00d5&', {}, {
      query: {
        method: 'GET',
        params: {
          recipeID: "Hot-Turkey-Salad-Sandwiches-Allrecipes",
        },
        isArray: false
      }
    });
  });
