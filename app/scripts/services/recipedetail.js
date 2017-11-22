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
    return $resource('http://api.yummly.com/v1/api/recipe/Spicy-Korean-Soft-Tofu-Stew-_Soondubuchigae_-2216480?_app_id=2c7ef7da&_app_key=3ee37a374773a7feda327bb47a8b00d5', {}, {
      find: {

        method: 'GET',
        isArray: false
      }
    });
  });
