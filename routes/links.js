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
        return LinkModel.find(function(err, links) {
            if (err) throw err;
            return response.send(links);
        });
    });


    // API POST Insert a new link
    server.post('/api/links', function(request, response) {
        var link = new LinkModel({
            url: request.body.url,
            description: request.body.description
        });
        link.save(function(err) {
            if (err) throw err;
            console.log('created');
            return response.send(link);
        });
    });

    // API GET by ID Get a single link by id
    server.get('/api/links/:id', function(request, response) {
        return LinkModel.findById(request.params.id, function(err, link) {
            if (err) throw err;
            return response.send(link);
        });
    });

    // API PUT Update a link
    server.put('/api/links/:id', function(request, response) {
        console.log('Updating link ' + request.body.url);
        return LinkModel.findById(request.params.id, function(err, link) {
            link.url = request.body.url;
            link.description = request.body.description;

            return link.save(function(err) {
                if (err) throw err;
                console.log('link updated');
                return response.send(link);
            });
        });
    });

    // API DELETE Delete a link
    server.delete('/api/links/:id', function(request, response) {
        console.log('Deleting link with id: ' + request.params.id);
        return LinkModel.findById(request.params.id, function(err, link) {
            return link.remove(function(err) {
                if (err) throw err;
                console.log('link removed');
                return response.send('link removed');
            });
        });
    });
}

// #############################################################################
// Module exports
// #############################################################################

module.exports = exports = linksAPI;