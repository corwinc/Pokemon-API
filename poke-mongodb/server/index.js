var app = require('./server.js');
var port = 3000;

app.listen(port, function () {
  console.log('Poke-MongoDB RESTful API listening on port ' + port);
});
