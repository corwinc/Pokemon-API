var mongoose = require('mongoose');
var pokeData = require('../../../data/pokemon.json');
// Complete the pokemonSchema below.
var pokemonSchema = new mongoose.Schema({
  number: {type: Number, unique: true},
  name: {type: String, unique: true},
  types: [String],
  imgUrl: String,
});
 
// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
