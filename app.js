// Express Stuff
var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');

// App-Specific 
var globals = require('./config');
var ComicModel = require('./models/ComicModel');
var SearchApp = require('./routes/SearchApp');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser(globals.EXPRESS_SECRET));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', SearchApp.index);
app.get('/character/:name', SearchApp.getCharacter);
app.get('/issue/:number', SearchApp.getFirstAppearanceIssues);
app.get('/searchTest', SearchApp.getTestPage);
app.post('/searchTest', SearchApp.postTestSearch);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
    console.log('Using ComicVine API Key: ' + globals.COMICVINE_API_KEY);
});
