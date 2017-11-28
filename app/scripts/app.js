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

            })
            .when('/recipes', {
                templateUrl: 'views/recipes.html',
                controller: 'RecipesCtrl',

            })
            .when('/additionalInformation', {
                templateUrl: 'views/additionalInformation.html',
                controller: 'InformationCtrl',

            })
            .when('/recipedetail/:recipeid', {
              templateUrl: 'views/recipedetail.html',
              controller: 'RecipedetailCtrl',

            })
            .otherwise({
                redirectTo: '/'
            });
    });
