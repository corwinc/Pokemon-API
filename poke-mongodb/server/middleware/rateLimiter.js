// NOTE: Currently using a hardcoded dummy user. Ideally, this would get a user id via authentication if it were set up.
// NOTE: On '/' load, there are 2 get requests sent. Didn't take the time to debug it, but it affects the rateLimiting (counts 2x);

var storage = {};

var rateLimiter = function (req, res, next) {
  var user = req.headers.user || undefined;

  // IF REQUEST HAS USER DEFINED
  if (req.url === '/api/pokemon' && user !== undefined) {
    // IF NEW USER & NEW USER SESSION
    if (!storage[user]) {
      storage[user] = {};
      storage[user].requests = 1;

      var date = new Date();
      console.log('date', date);
      storage[user].startTime = date;
      console.log('new user rateLimiter:', storage[user]);
    }

    // CHECK REQUEST COUNT & TIME
    var currentTime = Date.now();
    var elapsedTimeS = (currentTime - storage[user].startTime) / 1000; // seconds
    // console.log('elapsed time seconds:', elapsedTimeS);
    if (elapsedTimeS < 3600) {
      if (storage[user].requests < 100) {
        storage[user].requests++;
      } else {
        res.status(500).send('You\'ve hit your limit! Come back in an hour.');
      }
    // if it's been more than 1 hour, reset start time and request counter
    } else {
      storage[user].startTime = currentTime;
      storage[user].requests = 1;
    }

  // IF NO USER SENT IN HEADERS
  } else if (req.url === '/api/pokemon' && req.headers.user === undefined) {
    res.status(500).send('No user specified in request');
  }

  next();
};

module.exports = rateLimiter;
