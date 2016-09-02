var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var pokemonRouter = require('./resources/pokemon/pokemonRouter.js');
var pokemonController = require('./resources/pokemon/pokemonController.js');

// Create the Express application:
var app = express();

// Attach middleware:
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Import the pokemonRouter and assign it to the correct route:
// TODO: CHECK path name
// app.use('/', pokemonRouter);


////  ROUTES //////
app.get('/api/pokemon', pokemonController.retrieve);
app.post('/api/pokemon', pokemonController.createOne);
app.post('/api/pokemon-retrieve', pokemonController.retrieveOne);
app.post('/api/pokemon-update', pokemonController.updateOne);
app.get('/api/delete', pokemonController.delete);
app.post('/api/delete', pokemonController.deleteOne);

// STATIC FILES ///


// app.get('/', function (req, res) {
//   res.json({ message: 'Welcome to the Poke-MongoDB RESTful API!' });
// });

module.exports = app;
