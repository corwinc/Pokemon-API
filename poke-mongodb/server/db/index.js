var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';
var pokeData = require('../../data/pokemon.json');
var Pokemon = require('../resources/pokemon/Pokemon.js');

// Connect Mongoose to our local MongoDB via URI specified above and export it below
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error'));
db.once('open', function() {
  console.log('Mongoose is connected!!');
});

// console.log('pokeData served from index.js: ', pokeData); // success

/////// INSERT POKEMON DATA INTO DB ON LAUNCH //////
pokeData.forEach(function(pokemon) {
  // console.log('individual pokeData item: ', pokemon); // success
  // create new pokemon & save to server
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
