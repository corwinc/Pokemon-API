var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

///// QUESTIONS //////
// what is Router .route format?
// what is :number format?


// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')

pokemonRouter.route('/:number')


module.exports = pokemonRouter;






// TODO
// Create a router in `resources/pokemon/pokemonRouter.js` that utilizes 
//each of your controller's methods. Be sure to handle errors appropriately.