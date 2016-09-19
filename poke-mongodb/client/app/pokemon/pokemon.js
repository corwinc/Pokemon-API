angular.module('pokemon.pokemon', [])
.controller('PokemonController', function($scope, $http) {
  // logic for pokemon view
  $scope.pokemon = [];
  console.log('scope pokemon:', $scope.pokemon);

  // rateLimiter functionality: plan to add headers: {} to each request to /api/pokemon, with User info. Not including now b/c haven't been able to test the first versions of these functions b/c static files not loading.

  $scope.getPokemon = function() {
    console.log('getPokemon called');
    $http({
      method: 'GET',
      url: '/api/pokemon'
    })
    .then(function(res) {
      console.log('displayPokemon response data: ', res.data);
      // for each item in result, push to $scope.pokemon

      res.data.forEach(function(poke) {
        // console.log('for each poke: ', poke);
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


// update to GET w/ query 
  $scope.getPokemonByType = function(type) {
    console.log('getPokemonByType called, type:', type);
    $http({
      method: 'GET',
      url: '/api/pokemon/type/' + type
    })
    .then(function(res) {
      console.log('getPokemonByType response data: ', res.data);
      // clear pokemon
      $scope.pokemon = [];
      // for each item in result, push to $scope.pokemon
      res.data.forEach(function(poke) {
        console.log('for each poke: ', poke);
        $scope.pokemon.push(poke);
      });
    });
  };

  $scope.getPokemon();

});