'use strict';

/**
 * @ngdoc overview
 * @name meatlessinseattleApp
 * @description
 * # meatlessinseattleApp
 *
 * Main module of the application.
 */
angular
    .module('meatlessinseattleApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                //controllerAs: 'main'
            })
            .when('/recipes', {
                templateUrl: 'views/recipes.html',
                controller: 'RecipesCtrl',
                //controllerAs: 'recipes'
            })
            .when('/additionalInformation', {
                templateUrl: 'views/additionalInformation.html',
                controller: 'InformationCtrl',
                //controllerAs: 'recipes'
            })
            .when('/recipedetail', {
              templateUrl: 'views/recipedetail.html',
              controller: 'RecipedetailCtrl',
              controllerAs: 'recipedetail'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
