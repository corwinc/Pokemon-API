var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');
var server = require('../../server.js');

pokemonRouter.route('/')
  .get(pokemonController.retrieve)
  .post(pokemonController.createOne)
  .delete(pokemonController.delete);

pokemonRouter.route('/:number')
  .get(pokemonController.retrieveOne)
  .put(pokemonController.updateOne)
  .delete(pokemonController.deleteOne);

pokemonRouter.route('/type/:type')
  .get(pokemonController.findByType);


module.exports = pokemonRouter;
