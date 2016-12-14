// NOTE: Currently using a hardcoded dummy user as a placeholder.
var storage = {};

var rateLimiter = function (req, res, next) {
  var user = req.headers.user || undefined;

  if (req.url === '/api/pokemon' && user !== undefined) {
    if (!storage[user]) {
      storage[user] = {};
      storage[user].requests = 1;

      var date = new Date();
      storage[user].startTime = date;
    }

    var currentTime = Date.now();
    var elapsedTimeS = (currentTime - storage[user].startTime) / 1000; // seconds
    
    if (elapsedTimeS < 3600) {
      if (storage[user].requests < 100) {
        storage[user].requests++;
      } else {
        res.status(500).send('You\'ve hit your limit! Come back in an hour.');
      }
    } else {
      storage[user].startTime = currentTime;
      storage[user].requests = 1;
    }

  } else if (req.url === '/api/pokemon' && req.headers.user === undefined) {
    res.status(500).send('No user specified in request');
  }

  next();
};

module.exports = rateLimiter;
