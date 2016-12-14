var Pokemon = require('./Pokemon');

exports.createOne = function (req, res) {
  var poke = req.body;

  Pokemon.findOne({number: poke.number}, function(err, found) {
    if (!found) {
      var newPoke = new Pokemon(poke);
      newPoke.save(function(err, poke) {
        if (err) {
          res.status(500).send(error);
        }
        res.json(poke);
      });
    } else {
    }
  });
};

exports.retrieve = function (req, res) {
  Pokemon.find()
    .exec(function(err, found) {
      if (err) {
        res.status(500).send(error);
      } 
      res.json(found);
    });
};

exports.retrieveOne = function (req, res) {
  var number = req.params.number;
  Pokemon.find({number: number})
    .exec(function(err, found) {
      if (err) {
        res.status(500).send(error);
      } 
      res.json(found);
    });
};

exports.updateOne = function (req, res) {
  var number = req.params.number;
  Pokemon.findOneAndUpdate({number: number}, {
    name: req.body.name,
    types: req.body.types,
    imgUrl: req.body.imgUrl
  })
    .exec(function(err, pokemon) {
      if (err) {
        res.status(500).send(error);
      }
      res.json(pokemon);
    });
};

exports.delete = function (req, res) {
  Pokemon.find().remove({})
    .exec(function(err, data) {
      if (err) {
        res.status(500).send(error);
      } 
      res.json(data);
    });
};

exports.deleteOne = function (req, res) {
  var number = req.params.number;
  Pokemon.findOneAndRemove({number: number}, function(err, doc, result) {
    if (err) {
      res.status(500).send(error);
    } 
    res.json(doc); 
  });
};

exports.findByType = function(req, res) {
  var type = req.params.type;
  Pokemon.find({types: type})
  .exec(function(err, found) {
    if (err) {
      res.status(500).send(error);
    }
    res.json(found);
  });
};


