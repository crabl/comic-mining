
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.logaction = function(req, res){
  var options = {
    host : 'www.example.com',
    path : '/api/action/param1/value1/param2/value2',
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
