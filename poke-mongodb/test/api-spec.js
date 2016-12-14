var chai = require('chai');
var mongoose = require('mongoose');
var expect = chai.expect;
var request = require('supertest');
var app = require('../server/server.js');
var Pokemon = require('../server/resources/pokemon/Pokemon');
var pokemonController = require('../server/resources/pokemon/pokemonController.js');

chai.use(require('chai-things'));

var dbURI = 'mongodb://localhost/pokemontest';

var getBody = function (res) {
  return JSON.parse(res.text);
};

var clearDB = function (done) {
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
    server = app.listen(8080, function() {
      clearDB(function () {
        Pokemon.create(starterPokemon, done);
      });
    });
  });

  afterEach(function () {
    server.close();
  });

  describe('/api/pokemon', function () {
    describe('pokemonController.retrieve should be a function', function() {
      it('should return starterPokemon', function() {
        expect(pokemonController.retrieve).to.be.a('function');
      });
    });

    describe('Should get stuff', function() {
      it('should get stuff', function(done) {
        request(app)
          .get('/api/pokemon/4')
          .set('user', 'dummy')
          .expect(200, done);
      });
    });
  });
});




