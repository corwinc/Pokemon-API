var chai = require('chai');
var mongoose = require('mongoose');
var expect = chai.expect;
var request = require('supertest');
var app = require('../server/server.js');
var Pokemon = require('../server/resources/pokemon/Pokemon');

chai.use(require('chai-things'));

var dbURI = 'mongodb://localhost/pokemontest';

var getBody = function (res) {
  return JSON.parse(res.text);
};

var clearDB = function (done) {
  // Mongoose doesn't know how to pluralize 'pokemon'
  mongoose.connection.collections['pokemons'].remove(done);
};

var starterPokemon = [
  {
    number: 1,
    name: 'Bulbasaur',
    types: ['Grass', 'Poison'],
    imageUrl: 'http://nintendo.wikia.com/wiki/File:Bulbasaur.png'
  },
  {
    number: 4,
    name: 'Charmander',
    types: ['Fire'],
    imageUrl: 'http://nintendo.wikia.com/wiki/File:Charmander.png'
  },
  {
    number: 7,
    name: 'Squirtle',
    types: ['Water'],
    imageUrl: 'http://nintendo.wikia.com/wiki/File:Squirtle.png'
  },
];

describe('Pokemon API', function () {
  var server;

  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  beforeEach(function (done) {
    server = app.listen(3000, function() {
      clearDB(function () {
        Pokemon.create(starterPokemon, done);
      });
    });
  });

  afterEach(function () {
    server.close();
  });

  describe('/api/pokemon', function () {
    // Write your tests here!
  });
});