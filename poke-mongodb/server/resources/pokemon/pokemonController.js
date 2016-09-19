var Pokemon = require('./Pokemon');

// Complete each of the following controller methods

exports.createOne = function (req, res) {
  // console.log('req body: ', req.body);
  var poke = req.body;
  // check if pokemon already exists
  Pokemon.findOne({number: poke.number}, function(err, found) {
    // if not there: create
    if (!found) {
      var newPoke = new Pokemon(poke);
      newPoke.save(function(err, poke) {
        if (err) {
          res.status(500).send(error);
        }
        console.log('new pokemon created and saved!: ', newPoke);
        res.json(poke);
      });
    // else return found status & pokemon json
    } else {
      // send response found
    }
  });
};

exports.retrieve = function (req, res) {
  // console.log('get all pokemon request:', req);
  Pokemon.find()
    .exec(function(err, found) {
      // console.log('retrieve found: ', found);
      if (err) {
        res.status(500).send(error);
      } 
    // if there, return pokemon data 
      res.json(found);
    });
};


///// NEED TO FIX ///////
exports.retrieveOne = function (req, res) {
  Pokemon.find({number: req.body.number})
    .exec(function(err, found) {
      console.log('retrieveOne found: ', found);
      if (err) {
        res.status(500).send(error);
      } 
    // if there, return pokemon data 
      res.json(found);
    });
};

exports.updateOne = function (req, res) {
  //PUT request handling: what is being updated? assume everything
  // console.log('updateOne req.body: ', req.body);
  Pokemon.findOneAndUpdate({number: req.body.number}, {
    name: req.body.name,
    types: req.body.types,
    imgUrl: req.body.imgUrl
  })
    .exec(function(err, pokemon) {
      console.log('updateOne pokemon data: ', pokemon);
      if (err) {
        res.status(500).send(error);
      }
      res.json(pokemon);
    });
};

exports.delete = function (req, res) {
  // DELETE request handling: remove ALL from db
  // console.log('delete req.body: ', req.body);
  Pokemon.find().remove({})
    .exec(function(err, data) {
      if (err) {
        res.status(500).send(error);
      } 
      res.json(data);
    });
};

exports.deleteOne = function (req, res) {
  // DELETE only one by NUMBER
  // console.log('deleteOne req.body: ', req.body);
  Pokemon.findOneAndRemove({number: req.body.number}, function(err, doc, result) {
    if (err) {
      res.status(500).send(error);
    } 
    res.json(doc); 
  });
};

exports.findByType = function(req, res) {
  console.log('findByType req:', req);
  console.log('findByType req.query:', req.query);
  var type = req.params.type;
  Pokemon.find({types: type})
  .exec(function(err, found) {
    if (err) {
      res.status(500).send(error);
    }
    res.json(found);
  });
};


