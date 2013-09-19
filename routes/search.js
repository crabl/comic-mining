var http = require('follow-redirects').http
var globals = require('../config.js');

exports.getCharacter = function(req, res){
  var options = {
    host : globals.COMICVINE_API_ROOT,
    path : '/api/search?api_key=' + globals.COMICVINE_API_KEY + '&format=json&resources=character&query=' + req.query.character,
    port : 80,
    method : 'GET'
  }

  var request = http.request(options, function(response){
    var body = ""
    response.on('data', function(data) {
      body += data;
    });
    response.on('end', function() {
      res.send(JSON.parse(body));
    });
  });
  request.on('error', function(e) {
    console.log('Problem with request: ' + e.message);
  });
  request.end();
};
