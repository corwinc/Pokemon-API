var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var pokemonRouter = require('./resources/pokemon/pokemonRouter.js');
var pokemonController = require('./resources/pokemon/pokemonController.js');
var path = require('path');
var rateLimiter = require('./middleware/rateLimiter.js');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(rateLimiter);

app.use('/api/pokemon', pokemonRouter);

app.use(express.static(path.join(__dirname, '../client')));

module.exports = app;
