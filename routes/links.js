// #############################################################################
// Dependencies
// #############################################################################
var mongoose = require('mongoose');

// #############################################################################
// Config
// #############################################################################

//Connect to database
mongoose.connect("mongodb://localhost:27017/link_db");

//Schemas

var Link = new mongoose.Schema({
    url: String,
    description: String,

});

//Models
var LinkModel = mongoose.model('Link', Link);


// #############################################################################
// Routing definitions
// #############################################################################

function linksAPI(server) {


    // API GET Get a list of all links
    server.get('/api/links', function(request, response) {
        LinkModel.find(function(err, links) {
            if (err) {
                response.send(404);
                throw err;
            }
            response.send(links);
        });
    });


    // API POST Insert a new link
    server.post('/api/link', function(request, response) {
        var link = new LinkModel({
            url: request.body.url,
            description: request.body.description
        });
        link.save(function(err) {
            if (err) {
                response.send(404);
                throw err;
            }
            console.log('created');
            response.send(link);
        });
    });

    // API GET by ID Get a single link by id
    server.get('/api/links/:id', function(request, response) {
        LinkModel.findById(request.params.id, function(err, link) {
            if (err) {
                response.send(404);
                throw err;
            }
            response.send(link);
        });
    });

    // API PUT Update a link
    server.put('/api/links/:id', function(request, response) {
        console.log('Updating link ' + request.body.title);
        LinkModel.findById(request.params.id, function(err, link) {
            link.title = request.body.title;
            link.author = request.body.author;
            link.releaseDate = request.body.releaseDate;
            link.keywords = request.body.keywords;

            link.save(function(err) {
                if (err) {
                    response.send(404);
                    throw err;
                }
                console.log('link updated');
                response.send(link);
            });
        });
    });

    // API DELETE Delete a link
    server.delete('/api/links/:id', function(request, response) {
        console.log('Deleting link with id: ' + request.params.id);
        LinkModel.findById(request.params.id, function(err, link) {
            link.remove(function(err) {
                if (err) {
                    response.send(404);
                    throw err;
                }
                console.log('link removed');
                response.send('link removed');
            });
        });
    });
}

// #############################################################################
// Module exports
// #############################################################################

module.exports = exports = linksAPI;
