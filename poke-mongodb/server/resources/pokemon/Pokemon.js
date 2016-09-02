var mongoose = require('mongoose');
// Complete the pokemonSchema below.
var pokemonSchema = new mongoose.Schema({
  number: {type: Number, unique: true},
  name: {type: String, unique: true},
  types: [String],
  imgUrl: String,
});
 
// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Pokemon = mongoose.Model('Pokemon', pokemonSchema);
 

module.exports = Pokemon;
