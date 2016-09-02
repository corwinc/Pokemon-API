angular.module('pokemon', [
  'pokemon.pokemon',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/pokemon', {
      templateUrl: 'app/pokemon/pokemon.html',
      controller: 'PokemonController'
    })
    .when('/add', {
      templateUrl: 'app/add/add.html',
      controller: 'AddController'
    })
    .otherwise({redirectTo: '/pokemon'});
});