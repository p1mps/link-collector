var request = require('supertest'),
    assert = require('assert'),
    app = require('../app'),
    mongoose = require('mongoose'),
    dburl = "mongodb://localhost:27017/link_db", //automatic db cleaning
    clearDB = require('mocha-mongoose')(dburl),
    LinkModel = mongoose.model('Link', app.Link),
    linkbackbone = require('../public/js/models'),
    id;

// #############################################################################
// Api testing
// #############################################################################



// Insert records before the tests
beforeEach(function(done) {

    mongoose.createConnection(dburl);
    //Models
    var link = new LinkModel({
        url: "url",
        description: "description"
    });
    link.save(function(err, model) {
        LinkModel.find({}, function(err, links) {
            if (err) return done(err);
            assert.equal(links.length, 1);
            id = links[0].id;
        });
    });

    done();

});



describe('Server testing', function() {

    describe('GET /', function() {
        it('responds with index.html', function(done) {
            request(app)
                .get('/')
                .end(function(err, res) {
                    // Make sure there was no error
                    assert.equal(err, null);
                    // Finish asynchronous test
                    done();
                });
        });
    });

    describe('GET /api/links', function() {
        it('responds json links', function(done) {
            request(app)
                .get('/api/links')
                .end(function(err, res) {
                    // Make sure there was no error
                    assert.equal(err, null);
                    assert.notEqual(res, null);
                    assert.equal(res.body.length, 1);
                    assert.equal(res.body[0].url, 'url');
                    assert.equal(res.body[0].description, 'description');
                    // Finish asynchronous test
                    done();
                });
        });

    });


    describe('GET /api/links/:id', function() {
        it('responds json link', function(done) {
            request(app)
                .get('/api/links/' + id)
                .end(function(err, res) {
                    assert.equal(err, null);
                    assert.notEqual(res.body.lenght, 0);
                    console.log(res.body);
                    // Make sure there was no error
                    // Finish asynchronous test
                    done();
                });
        });

    });





});