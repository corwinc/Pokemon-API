var Pokemon = require('./Pokemon');

// Complete each of the following controller methods

/// TODO: check if all are working
/// TODO: make sure correct variables are getting passed in
//// TODO: check .then v .exec


exports.createOne = function (req, res) {
  console.log('req body: ', req.body);
  var poke = req.body;
  // check if pokemon already exists
  Pokemon.findOne({number: poke.number}, function(err, found) {
    // if not there: create
    if (!found) {
      var newPoke = new Pokemon(poke);
      newPoke.save(function(err) {
        if (err) {
          return handleError(err);
        }
        console.log('new pokemon created and saved!: ', newPoke);
      });
    // else return found status & pokemon json
    } else {
      // send response found
    }
  });
};


// TODO: does find() need a callback or is exec ok?
exports.retrieve = function (req, res) {
  // find ALL pokemon
  Pokemon.find()
    .exec(function(err, found) {
      console.log('retrieve found: ', found);
      if (err) {
        return handleError(err);
      } 
    // if there, return pokemon data 
      res.json(found);
    });
};

exports.retrieveOne = function (req, res) {
  // findOne by number
  console.log('retrieveOne req.body: ', req.body);
  Pokemon.find({number: req.body.number})
    .exec(function(err, found) {
      console.log('retrieveOne found: ', found);
      if (err) {
        return handleError(err);
      } 
    // if there, return pokemon data 
      res.json(found);
    });
};


// TODO: CHECK that findOneAndUpdate returns the pokemon
// TODO: check callback v exec functionality
// TODO: check that pokemon sent back is updated v not old v http://mongoosejs.com/docs/api.html#model
exports.updateOne = function (req, res) {
  //PUT request handling: what is being updated? assume everything
  console.log('updateOne req.body: ', req.body);
  Pokemon.findOneAndUpdate({number: req.body.number}, {
    name: req.body.name,
    types: req.body.types,
    imgUrl: req.body.imgUrl
  }, function(err, pokemon) {
    console.log('updateOne pokemon data: ', pokemon);
    if (err) {
      return handleError(err);
    } 
    res.json(pokemon);
  });
    // .exec(function(err, pokemon) {
    //   console.log('updateOne pokemon data: ', pokemon);
    //   if (err) return handleError(err);
    //   res.json(pokemon)
    // })
};


/// TODO: does remove return data?
exports.delete = function (req, res) {
  // DELETE request handling: remove ALL from db
  console.log('delete req.body: ', req.body);
  Pokemon.find().remove({})
    .exec(function(err, data) {
      if (err) {
        return handleError(err);
      } 
      res.json(data);
    });
};


/// TOOD: CHECK if sending back doc v result
exports.deleteOne = function (req, res) {
  // DELETE only one by NUMBER
  console.log('deleteOne req.body: ', req.body);
  Pokemon.findOneAndRemove({number: req.body.number}, function(err, doc, result) {
    if (err) {
      return handleError(err);
    } 
    res.json(doc); // send result instead?
  });
};
