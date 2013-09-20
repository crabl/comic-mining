var http = require('follow-redirects').http
var globals = require('../config.js');
var sanitize = require('validator').sanitize,
    check = require('validator').check;

var sane = function(input) {
	return encodeURIComponent(input).replace(/%20/g, '+');
}

/* Main search page */
exports.index = function(req, res) {
    res.render('CharacterSearchResultsView', {title: 'Comic Book API Search', cv : { results: []}});
};

/* Get aliases of character */
exports.getCharacter = function(req, res){
    var options = {
	host : globals.COMICVINE_API_ROOT,
	path : '/api/search?api_key=' + globals.COMICVINE_API_KEY + '&format=json&resources=character&query=' + sane(req.param('name')),
	port : 80,
	method : 'GET'
    }
    
    var request = http.request(options, function(response){
	var body = ""
	response.on('data', function(data) {
	    body += data;
	});
	response.on('end', function() {
	    res.render('CharacterSearchResultsView', {cv: JSON.parse(body), title: "Search results for character " + sane(req.param('name')).replace(/%2B/g, ' ')});
	});
    });

    request.on('error', function(e) {
	console.log('Problem with request: ' + e.message);
    });

    request.end();
};

exports.getFirstAppearanceIssues = function(req, res) {
    var options = {
	host : globals.COMICVINE_API_ROOT,
	path : '/api/issues?api_key=' + globals.COMICVINE_API_KEY + '&format=json&id' + sane(req.param('number')),
	port : 80,
	method : 'GET'
    }
    
    var request = http.request(options, function(response){
	var body = ""
	response.on('data', function(data) {
	    body += data;
	});
	response.on('end', function() {
	    res.render('IssueSearchResultsView', {cv: JSON.parse(body), title: "Search results for issue id " + sane(req.param('number')).replace(/%2B/g, ' ')});
	});
    });

    request.on('error', function(e) {
	console.log('Problem with request: ' + e.message);
    });

    request.end();  
};

exports.getTestPage = function(req, res) {
    res.render('AJAXSearchTest', {title: 'AJAX Search Test'});
};

exports.postTestSearch = function(req, res) {
    var options = {
        host : globals.COMICVINE_API_ROOT,
        path : '/api/search?api_key=' + globals.COMICVINE_API_KEY + '&format=json&resources=character&query=' + sane(req.param('term')),
        port : 80,
        method : 'GET'
    }

    console.log(options.path);

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
