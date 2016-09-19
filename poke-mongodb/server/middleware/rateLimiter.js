var rateLimiter = function (req, res, next) {
  // console.log('INSIDE RATE LIMITER! req.url & user:', req.url, req.headers.user);
  var storage = {};
  var user = req.headers.user || undefined;

  if (req.url === '/api/pokemon' && user !== undefined) {
    // console.log('user found!');
    if (!storage.user) {
      console.log('there\'s no storage.user!');
      storage[user] = 1;
      console.log('storage:', storage);
    }

    if (storage[user] < 100) {
      console.log('storage[user] < 100');
      storage[user]++;
      console.log('storage++:', storage);       
    } else {
      res.status(500).send('You\'re over the limit. Please wait an hour before sending another request.');
    }
    
  } else if (req.url === '/api/pokemon' && req.headers.user === undefined) {
    res.status(500).send('No user is specified.');
  }

  next();
};

module.exports = rateLimiter;



  // headers: 
  //  { host: 'localhost:8080',
  //    connection: 'keep-alive',
  //    pragma: 'no-cache',
  //    'cache-control': 'no-cache',
  //    accept: 'application/json, text/plain, */*',
  //    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
  //    referer: 'http://localhost:8080/',
  //    'accept-encoding': 'gzip, deflate, sdch',
  //    'accept-language': 'en-US,en;q=0.8' },

   //  rawHeaders: 
   // [ 'Host',
   //   'localhost:8080',
   //   'Connection',
   //   'keep-alive',
   //   'Pragma',
   //   'no-cache',
   //   'Cache-Control',
   //   'no-cache',
   //   'Accept',
   //   'application/json, text/plain, */*',
   //   'User-Agent',
   //   'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
   //   'Referer',
   //   'http://localhost:8080/',
   //   'Accept-Encoding',
   //   'gzip, deflate, sdch',
   //   'Accept-Language',
   //   'en-US,en;q=0.8' ],

  //  baseUrl: '/api/pokemon',
  // originalUrl: '/api/pokemon',