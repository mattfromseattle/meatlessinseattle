'use strict';

/**
 * @ngdoc service
 * @name meatlessinseattleApp.recipesearch
 * @description
 * # recipesearch
 * Factory in the meatlessinseattleApp.
 */
angular.module('meatlessinseattleApp')
  .factory('recipesearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.yummly.com/v1/api/recipes?_app_id=2c7ef7da&_app_key=3ee37a374773a7feda327bb47a8b00d5&allowedIngredient=:allowedIngredient&maxResult=1000&start=1', {}, {
      find: 'GET',
      params: {
        allowedIngredient: 'tofu'
      },
      isArray: false
    });
  });
