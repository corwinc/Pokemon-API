var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';
var pokeData = require('../../data/pokemon.json');
var Pokemon = require('../resources/pokemon/Pokemon.js');

mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error'));
db.once('open', function() {
  console.log('Mongoose is connected!!');
});

pokeData.forEach(function(pokemon) {
  var item = new Pokemon(pokemon);
  item.save(function(err, success) {
    if (err) {
      console.log('error saving item');
    } else {
      console.log('saved pokemon item to db!');
    }
  });
});

module.exports = db;
