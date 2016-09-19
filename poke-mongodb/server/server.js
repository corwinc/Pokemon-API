var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var pokemonRouter = require('./resources/pokemon/pokemonRouter.js');
var pokemonController = require('./resources/pokemon/pokemonController.js');
var path = require('path');
var rateLimiter = require('./middleware/rateLimiter.js');

// Create the Express application:
var app = express();

// Attach middleware:
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(rateLimiter);

// Connect router:
app.use('/api/pokemon', pokemonRouter);

// Serve static files:
app.use(express.static(path.join(__dirname, '../client')));

module.exports = app;
