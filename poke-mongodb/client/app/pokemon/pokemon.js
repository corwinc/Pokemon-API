angular.module('pokemon.pokemon', [])
.controller('PokemonController', function($scope, $http) {
  // logic for pokemon view
  $scope = {};
  $scope.pokemon = [];

  $scope.displayPokemon = function() {
    $http({
      method: 'GET',
      url: '/api/pokemon'
    })
    .then(function(res) {
      console.log('displayPokemon response: ', res);
      console.log('displayPokemon response data: ', res.data);
      // for each item in result, push to $scope.pokemon
      res.forEach(function(poke) {
        console.log('for each poke: ', poke);
        $scope.pokemon.concat(poke);
      });
      res.send();
    });
  };

  $scope.createPokemon = function() {
    $http({
      method: 'POST',
      url: '/api/pokemon',
      data: {
        number: $scope.newPoke.number,
        name: $scope.newPoke.name,
        types: [$scope.newPoke.type],
        imgUrl: $scope.newPoke.imgUrl
      }
    })
    .then(function(res) {
      console.log('createPokemon res:', res);
      $scope.displayPokemon();
      res.send('pokemon created!');
    });
  };

  $scope.displayPokemonByType = function() {
    $http({
      method: 'POST',
      url: '/api/pokemon/type'
    })
    .then(function(res) {
      console.log('displayPokemon response: ', res);
      console.log('displayPokemon response data: ', res.data);
      // for each item in result, push to $scope.pokemon
      res.forEach(function(poke) {
        console.log('for each poke: ', poke);
        $scope.pokemon.concat(poke);
      });
      res.send();
    });
  };


});