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

    return $resource('http://api.yummly.com/v1/api/recipes?_app_id=2c7ef7da&_app_key=3ee37a374773a7feda327bb47a8b00d5&allowedDiet[]=386^Vegan', {}, {
      query: {
        method: 'GET',
        isArray:false
      }
    });
  });
