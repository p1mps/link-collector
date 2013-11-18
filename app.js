/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var url = require('url');
var app = express();

// all environments
app.set('port', 3020);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Configure routing
require('./routes/links')(app);

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));

});

module.exports = app;