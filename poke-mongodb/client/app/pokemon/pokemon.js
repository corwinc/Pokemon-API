angular.module('pokemon.pokemon', [])
.controller('PokemonController', function($scope, $http) {
  $scope.pokemon = [];
  console.log('scope pokemon:', $scope.pokemon);

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
      console.log('displayPokemon response data: ', res.data);

      res.data.forEach(function(poke) {
        if ($scope.pokemon.indexOf(poke) === -1) {
          $scope.pokemon.push(poke);
        }
      });
       
    });
  };

  $scope.createPokemon = function() {
    console.log('createPokemon called');
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
      console.log('createPokemon res:', res);
      $scope.getPokemon();
      res.send('pokemon created!');
    });
  };


  $scope.getPokemonByType = function(type) {
    console.log('getPokemonByType called, type:', type);
    $http({
      method: 'GET',
      url: '/api/pokemon/type/' + type,
      headers: {
        'user': 'dummy'
      }
    })
    .then(function(res) {
      console.log('getPokemonByType response data: ', res.data);
      $scope.pokemon = [];
      res.data.forEach(function(poke) {
        console.log('for each poke: ', poke);
        $scope.pokemon.push(poke);
      });
    });
  };

  $scope.getPokemon();

});