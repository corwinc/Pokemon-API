angular.module('pokemon.pokemon', [])
.controller('PokemonController', function($scope, $http) {
  $scope.pokemon = [];

  $scope.getPokemon = function() {
    console.log('getPokemon called');
    $http({
      method: 'GET',
      url: '/api/pokemon',
      headers: {
        'user': 'dummy'
      }
    })
    .then(function(res) {
      res.data.forEach(function(poke) {
        if ($scope.pokemon.indexOf(poke) === -1) {
          $scope.pokemon.push(poke);
        }
      });
       
    });
  };

  $scope.createPokemon = function() {
    $http({
      method: 'POST',
      url: '/api/pokemon',
      headers: {
        'user': 'dummy'
      },
      data: {
        number: $scope.newPoke.number,
        name: $scope.newPoke.name,
        types: [$scope.newPoke.type],
        imgUrl: $scope.newPoke.imgUrl
      }
    })
    .then(function(res) {
      $scope.getPokemon();
      res.send('pokemon created!');
    });
  };


  $scope.getPokemonByType = function(type) {
    $http({
      method: 'GET',
      url: '/api/pokemon/type/' + type,
      headers: {
        'user': 'dummy'
      }
    })
    .then(function(res) {
      $scope.pokemon = [];
      res.data.forEach(function(poke) {
        $scope.pokemon.push(poke);
      });
    });
  };

  $scope.getPokemon();

});