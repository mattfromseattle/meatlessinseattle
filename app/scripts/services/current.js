'use strict';

/**
 * @ngdoc service
 * @name meatlessinseattleApp.current
 * @description
 * # current
 * Factory in the meatlessinseattleApp.
 */
angular.module('meatlessinseattleApp')
.factory('current', function ($resource) {
  // Service logic
  // ...

  // Public API here
  return $resource('http://api.yummly.com/v1/api/recipes?_app_id=2c7ef7da&_app_key=3ee37a374773a7feda327bb47a8b00d5&allowedDiet[]=386^Vegan&maxResult=1000&start=1', {}, {
    query: {
      method:'GET',
      params:{
        allowedDiet: '386^Vegan'
      },
      isArray:false
    }
  });
});
