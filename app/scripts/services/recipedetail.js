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
    console.log('routeParams is ', $resource);
    return $resource('http://api.yummly.com/v1/api/recipe/' + 'Homemade-Cranberry-Sauce-2268614' + '?_app_id=2c7ef7da&_app_key=3ee37a374773a7feda327bb47a8b00d5', {}, {
      find: {
        method: 'GET',
        params: {
          // recipeid: ':Homemade-Cranberry-Sauce-2268614', // some default recipe to pull
          isArray: false
        }
      }
    });
  });
