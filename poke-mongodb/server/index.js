var app = require('./server.js');
var port = 8080;

app.listen(port, function () {
  console.log('Poke-MongoDB RESTful API listening on port ' + port);
});
