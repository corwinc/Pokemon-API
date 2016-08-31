var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

// Create the Express application:
var app;

// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


app.get('/', function (req, res) {
  res.json({ message: 'Welcome to the Poke-MongoDB RESTful API!' });
});

module.exports = app;
