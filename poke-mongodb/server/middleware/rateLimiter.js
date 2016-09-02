var rateLimiter = function (req, res, next) {
  if (req.url === '/api/pokemon') {
    // check that user property is in header, else return error
    // if user property is there, continue to check # requests (see below)
  }
  // need to store user + #requests on db (??) // or store locally?
  // run check to see # of requests
    // if > 100, return an error telling the user they've maxed out
    // if < 100, continue via next();
  next();
};

module.exports = rateLimiter;
