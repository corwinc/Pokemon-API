var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');
var server = require('../../server.js');

///// QUESTIONS //////
// what is Router .route format?
// what is :number format?


// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')
  .get(pokemonController.retrieve)
  .post(pokemonController.createOne);

// pokemonRouter.route('/:number')
pokemonRouter.route('/updatePokemon')
  .post(pokemonController.updateOne);

pokemonRouter.route('/getPokemon')
  .post(pokemonController.retrieveOne);

pokemonRouter.route('/delete')
  .get(pokemonController.delete) // delete all
  .post(pokemonController.deleteOne);


module.exports = pokemonRouter;






// TODO
// Create a router in `resources/pokemon/pokemonRouter.js` that utilizes 
//each of your controller's methods. Be sure to handle errors appropriately.