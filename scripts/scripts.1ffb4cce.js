"use strict";function StartKillCounter(){for(var a=[9e4,45895,2262,1244,857,691,533,515,345,292,65,63,23,16,4,4,3,2],b=8,c=0;c<counts.length;++c)rate[c]=1e6*a[c]/365/24/60/60/b;setInterval("NewCounts()",1e3/b)}function NewCounts(){for(var a,b,c,d=0;d<counts.length;++d){for(counts[d]+=rate[d],a=Math.round(counts[d]),c="";a>1e3;)b=a%1e3,10>b?b="00"+b:100>b&&(b="0"+b),c=","+b+c,a=Math.floor(a/1e3);c=a+c,document.getElementById("count"+d).innerHTML=c}}angular.module("meatlessinseattleApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/recipes",{templateUrl:"views/recipes.html",controller:"RecipesCtrl"}).when("/additionalInformation",{templateUrl:"views/additionalInformation.html",controller:"InformationCtrl"}).when("/recipedetail/:recipeid",{templateUrl:"views/recipedetail.html",controller:"RecipedetailCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("meatlessinseattleApp").controller("MainCtrl",["$scope","current",function(a,b){a.current=b.query()}]),angular.module("meatlessinseattleApp").controller("RecipesCtrl",["$scope","recipesearch",function(a,b){a.recipesFound=b.find(),a.findRecipes=function(){a.recipesFound=b.find({allowedIngredient:a.allowedIngredient}),a.searchQuery=a.allowedIngredient}}]),angular.module("meatlessinseattleApp").factory("current",["$resource",function(a){return a("http://api.yummly.com/v1/api/recipes?_app_id=2c7ef7da&_app_key=3ee37a374773a7feda327bb47a8b00d5&allowedDiet[]=386^Vegan&maxResult=1000&start=1",{},{query:{method:"GET",params:{allowedDiet:"386^Vegan"},isArray:!1}})}]),angular.module("meatlessinseattleApp").factory("recipesearch",["$resource",function(a){return a("http://api.yummly.com/v1/api/recipes?_app_id=2c7ef7da&_app_key=3ee37a374773a7feda327bb47a8b00d5&maxResult=1000&start=1&allowedDiet[]=390^Vegan",{},{find:{method:"GET",isArray:!1}})}]);var counts=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],rate=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];angular.module("meatlessinseattleApp").factory("recipedetail",["$resource",function(a){return console.log("routeParams is ",a),a("http://api.yummly.com/v1/api/recipe/Homemade-Cranberry-Sauce-2268614?_app_id=2c7ef7da&_app_key=3ee37a374773a7feda327bb47a8b00d5",{},{find:{method:"GET",params:{isArray:!1}}})}]),angular.module("meatlessinseattleApp").controller("RecipedetailCtrl",["$scope","$routeParams","current","recipedetail",function(a,b,c,d){console.log("recipeid ",b.recipeid),console.log(c),a.recipeDetail=d.find({})}]),angular.module("meatlessinseattleApp").run(["$templateCache",function(a){a.put("views/additionalInformation.html",'<div class="col-sm-4 col-md-8 col-lg-12" id="slaugherNumbers"> <h2>More Than <strong style="color:red"> 150 Billion</strong> Animals Slaughtered Every Year</h2> <!-- Begin the Kill Counter: --> </div> <div class="counterOverlay"> <p id="killcounter-l"></p> <div class="row placeholders"> <div class="col-xs-6 col-sm-4"> <img src="images/sea-turtle.07f9b2ac.svg" width="200" height="200" class="img-responsive" alt="sea turtle"> <h4>Marine Animals: <span id="count0">0</span></h4> </div> <div class="col-xs-6 col-sm-4 placeholder"> <img src="images/chicken.73095308.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Chickens: <span id="count1">0</span></h4> </div> <div class="col-xs-6 col-sm-4 placeholder"> <img src="images/duck.3fe6c8a4.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Ducks: <span id="count2">0</span></h4> </div> <div class="col-xs-6 col-sm-4 placeholder"> <img src="images/pig.3bed9bba.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Pigs: <span id="count3">0</span></h4> </div> <div class="col-xs-6 col-sm-4 placeholder"> <img src="images/rabbit.d15f3133.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Rabbits: <span id="count4">0</span></h4> </div> <div class="col-xs-6 col-sm-4 placeholder"> <img src="images/turkey.c1b1cc22.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Turkeys: <span id="count5">0</span></h4> </div> <div class="col-xs-6 col-sm-4 placeholder"> <img src="images/goose.04bc9795.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Geese: <span id="count6">0</span></h4> </div> <div class="col-xs-6 col-sm-4 placeholder"> <img src="images/sheep.981f3f91.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Sheep: <span id="count7">0</span></h4> </div> <div class="col-xs-6 col-sm-4 placeholder"> <img src="images/goat.a376fc72.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Goats: <span id="count8">0</span></h4> </div> <div class="col-xs-6 col-sm-4 placeholder"> <img src="images/cow.b6775964.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Cows & Calves: <span id="count9">0</span></h4> </div> <div class="col-xs-6 col-sm-4 placeholder"> <img src="images/rat.27fccaef.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Rodents: <span id="count10">0</span></h4> </div> <div class="col-xs-6 col-sm-4 placeholder"> <img src="images/dove.6fb71a1a.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Pigeons & Other Birds: <span id="count11">0</span></h4> </div> <div class="col-xs-6 col-sm-4 placeholder"> <img src="images/buffalo.60b52e0b.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Buffaloes: <span id="count12">0</span></h4> </div> <div class="col-xs-6 col-sm-4 placeholder"> <img src="images/dog.d1a1cfe6.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Dogs: <span id="count13">0</span></h4> </div> <div class="col-xs-6 col-sm-4 placeholder"> <img src="images/cat.4f885651.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Cats: <span id="count14">0</span></h4> </div> <div class="col-xs-6 col-sm-4"> <img src="images/horse.d6b6045d.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Horses: <span id="count15">0</span></h4> </div> <div class="col-xs-6 col-sm-4"> <img src="images/donkey.732461f8.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Donkeys & Mules: <span id="count16">0</span></h4> </div> <div class="col-xs-6 col-sm-4"> <img src="images/camel.bca48f26.svg" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"> <h4>Camels & Other Camelids: <span id="count17">0</span></h4> </div> </div> </div> <script type="text/javascript">StartKillCounter();</script> <!-- End Kill Counter --> <div class="footer">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>'),a.put("views/main.html",'<!-- Sidebar links to more resources --> <div class="col-3 col-md-4 sidebar-offcanvas" id="sidebar"> <ul class="list-group"> <li class="list-group-item active" role="Why Vegan?">Resources</li> <a href="http://vegankit.com/why/" class="list-group-item list-group-item-action" target="_blank" id="reasonsToGoVegan">Why Vegan?</a> <a href="https://www.healthline.com/nutrition/vegan-diet-benefits" class="list-group-item list-group-item-action" target="_blank" id="healthBenefits">Benefits</a> <a href="http://www.chooseveg.com/environment" class="list-group-item list-group-item-action" target="_blank" id="environmentalBenefits">Environtmental Facts</a> <a href="http://thevegancalculator.com/" class="list-group-item list-group-item-action" target="_blank" id="veganCalculator">Vegan Calculator</a> <a href="https://www.vegan.com/" class="list-group-item list-group-item-action" target="_blank" id="nextSteps">Okay, what next?</a> <a href="https://vimeo.com/209647801" class="list-group-item list-group-item-action" target="_blank" id="earthlings">Earthlings Documentary <br><strong><font color="red">*GRAPHIC CONTENT*</font></strong></a> </ul> </div> <!-- /sidebar --> <!-- Google map with highlighted restaurants in the area --> <div class="map-container"> <iframe width="670" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDxAizBO0ZYynJASyU_zS34vpalo6Xqbjo&q=vegetarian+vegan+restaurant,98101" allowfullscreen> </iframe> </div> <!-- /map --> <div class="featured-recipe"> <h2>Featured Recipes</h2> <div class="row"> <div ng-init="limit = 3"> <div ng-repeat="recipes in current.matches | limitTo: limit as results"> <div class="clearfix" ng-if="$index % 3 == 0"></div> <div class="col-md-8 col-lg-4"> <img class="card-img-top" src="{{recipes.imageUrlsBySize[90]}}" alt="Featured Recipe Image"> <h4>{{recipes.recipeName}}</h4> <p class="card-text">Rating:{{recipes.rating}}/5</p> <a ng-href="/#!/recipedetail/:{{recipes.id}}" class="btn btn-primary">View Recipe</a> <hr> </div> </div> </div> </div> </div>'),a.put("views/recipedetail.html",'<div ng-repeat="recipe in recipeDetails.matches" ng-controller="RecipedetailCtrl"> <h2>{{recipe.id}}</h2> </div>'),a.put("views/recipes.html",'<!-- Search bar --> <div ng-app class="col-sm-6 col-md-12 col-lg-12" ng-controller="RecipesCtrl"> <p class="lead"> <div ng-init="allowedIngredient=\'\'"> <p> <label for="allowedIngredient">Ingredient: <input type="text" name="allowedIngredient" ng-model="allowedIngredient"> </label> </p> <p> <button ng-click="findRecipes()" class="btn btn-lg btn-primary">Search</button> </p> </div> <!-- /Search bar --> <!-- Search results --> <div ng-if="searchQuery"> <div class="results-recipe"> <div class="row"> <div ng-repeat="recipe in recipesFound.matches | limitTo: limit as results"> <div class="clearfix" ng-if="$index % 3 == 0"></div> <div class="col-md-8 col-lg-4"> <img class="card-img-top" src="{{recipe.imageUrlsBySize[90]}}" alt="Featured Recipe Image"> <h4>{{recipe.recipeName}}</h4> <p class="card-text">Rating:{{recipe.rating}}/5</p> <a ng-href="/#!/recipedetail/{{recipeid}}" class="btn btn-primary" for="recipeID">View Recipe</a> <hr> </div> </div> </div> </div> </div></p> </div> ')}]);