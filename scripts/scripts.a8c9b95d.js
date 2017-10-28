"use strict";angular.module("meatlessinseattleApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/recipes",{templateUrl:"views/recipes.html",controller:"RecipesCtrl"}).when("/searchresults",{templateUrl:"views/searchresults.html",controller:"SearchResultsCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("meatlessinseattleApp").controller("MainCtrl",["$scope","current",function(a,b){a.current=b.query()}]),angular.module("meatlessinseattleApp").controller("RecipesCtrl",["$scope","recipes",function(a,b){a.recipes=b.query()}]),angular.module("meatlessinseattleApp").factory("recipes",["$resource",function(a){return a("http://api.yummly.com/v1/api/recipe/Hearty-Vegan-Minestrone-with-Butternut-Squash-2238107?_app_id=2c7ef7da&_app_key=3ee37a374773a7feda327bb47a8b00d5",{},{query:{method:"GET",recipeID:"#",isArray:!1}})}]),angular.module("meatlessinseattleApp").factory("current",["$resource",function(a){return a("http://api.yummly.com/v1/api/recipes?_app_id=2c7ef7da&_app_key=3ee37a374773a7feda327bb47a8b00d5&allowedDiet[]=386^Vegan",{},{query:{method:"GET",params:{allowedDiet:"386^Vegan"},isArray:!1}})}]),angular.module("meatlessinseattleApp").factory("recipesearch",["$resource",function(a){return a("http://api.yummly.com/v1/api/recipes?_app_id=2c7ef7da&_app_key=3ee37a374773a7feda327bb47a8b00d5&allowedDiet[]=386^Vegan"),{find:{method:"GET",params:{query:"tofu"},isArray:!1}}}]),angular.module("meatlessinseattleApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="jumbotron"> <form action="#" method="GET"> <div class="row"> <div class="col-xs-12 col-md-12 col-lg-12"> <div class="input-group"> <input type="text" class="form-control" placeholder="What would you like to make today?" id="txtSearch"> <div class="input-group-btn"> <button class="btn btn-primary" type="submit" role="Search"> <span class="glyphicon glyphicon-search"></span> </button> </div> </div> </div> </div> </form> </div> <!-- Sidebar links to more resources --> <div class="col-3 col-md-4 sidebar-offcanvas" id="sidebar"> <ul class="list-group"> <li class="list-group-item active" role="Why Vegan?">Why Vegan?</li> <a href="http://vegankit.com/why/" class="list-group-item list-group-item-action" target="_blank" id="Reasons to go Vegan">Why?</a> <a href="https://www.healthline.com/nutrition/vegan-diet-benefits" class="list-group-item list-group-item-action" target="_blank" id="Health Benefits">Benefits</a> <a href="http://www.chooseveg.com/environment" class="list-group-item list-group-item-action" target="_blank" id="Environmental Benefits">Environtmental Facts</a> <a href="https://www.vegan.com/" class="list-group-item list-group-item-action" target="_blank" id="Next Steps">Okay, what next?</a> </ul> </div>  <!-- /sidebar --> <!-- Google map with highlighted restaurants in the area --> <div class="map-container"> <iframe width="670" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDxAizBO0ZYynJASyU_zS34vpalo6Xqbjo&q=vegetarian+vegan+restaurant,98101" allowfullscreen> </iframe> </div> <!-- /map --> <hr> <div class="row"> <div class="col-sm-6"> <div class="card"> <img class="img-fluid" src="{{current.matches[0].imageUrlsBySize[90]}}" alt="Featured Recipe 1"> <div class="card-body"> <h4 class="card-title">Featured Recipe</h4> <p class="card-text">{{current.matches[0].recipeName}}</p> <p class="card-text">{{current.matches[0].ingredients}}</p> <a href="#" class="btn btn-primary">View Recipe</a> </div> </div> </div> <div class="col-sm-6"> <div class="card"> <img class="card-img-top" src="{{current.matches[1].imageUrlsBySize[90]}}" alt="Featured Recipe 2"> <div class="card-body"> <h4 class="card-title">Featured Recipe</h4> <p class="card-text">{{current.matches[1].recipeName}}</p> <p class="card-text">{{current.matches[1].ingredients}}</p> <a href="/#!/recipes" class="btn btn-primary">View Recipe</a> </div> </div> </div> </div>'),a.put("views/recipes.html",'<div class="recipe"> <div class="details"> <img src="{{recipeSearch.images.hostedMediumUrl}}" alt=""> <hr> </div> </div>'),a.put("views/searchresults.html",'<div class="jumbotron"> <form action="#" method="GET"> <div class="row"> <div class="col-xs-12 col-md-12 col-lg-12"> <div class="input-group"> <input type="text" class="form-control" placeholder="What would you like to make today?" id="txtSearch"> <div class="input-group-btn"> <button class="btn btn-primary" type="submit" role="Search"> <span class="glyphicon glyphicon-search"></span> </button> </div> </div> </div> </div> </form> </div>')}]);