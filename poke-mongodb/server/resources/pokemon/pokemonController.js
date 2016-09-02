var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
  // find
    // if not there: create
    // else return found status & pokemon json
};

exports.retrieve = function (req, res) {
  // find ALL pokemon
    // if there, return pokemon data 
    // else 404
};

exports.retrieveOne = function (req, res) {
  // findOne by number
    // if there, return pokemon data
    // else 404
};

exports.updateOne = function (req, res) {
  //PUT request handling: what is being updated?
    // update pokemon by NUMBER
    // err / success handling
};

exports.delete = function (req, res) {
  // DELETE request handling: remove ALL from db
    // err/ success handling (return json of all deleted pokemon)
};

exports.deleteOne = function (req, res) {
  // DELETE only one by NUMBER
     // err / success handling
};
