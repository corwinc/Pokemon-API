angular.module('pokemon', [
  'pokemon.pokemon',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/pokemon/pokemon.html',
      controller: 'PokemonController'
    })
    .otherwise({redirectTo: '/pokemon'});
});
