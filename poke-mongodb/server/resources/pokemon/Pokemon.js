var mongoose = require('mongoose');
var pokeData = require('../../../data/pokemon.json');

var pokemonSchema = new mongoose.Schema({
  number: {type: Number, unique: true},
  name: {type: String, unique: true},
  types: [String],
  imgUrl: String,
});
 
var Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
