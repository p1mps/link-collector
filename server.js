// Module dependencies.
var application_root = __dirname,
    express = require('express'), //Web framework
    path = require('path'); //Utilities for dealing with file paths


//Create server
var server = express();

// Configure server
server.configure(function() {
    //server.set('views', __dirname + '/views');
    //server.set('view engine', 'jade');
    server.use(express.favicon());
    server.use(express.logger('dev'));
    //parses request body and populates request.body
    server.use(express.bodyParser());
    //checks request.body for HTTP method overrides
    server.use(express.methodOverride());
    //perform route lookup based on URL and HTTP method
    server.use(server.router);
    //Where to serve static content
    server.use(express.static(path.join(__dirname, 'public')));
    //Show all errors in development
    server.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});




//Start server
var port = 4710;
server.listen(port, function() {
    console.log('Express server listening on port %d in %s mode',
        port, server.settings.env);
});