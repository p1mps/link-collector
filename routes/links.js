// #############################################################################
// Dependencies
// #############################################################################

var mongodb = require('mongodb');

// #############################################################################
// Config
// #############################################################################
/*
//Connect to database
mongoose.connect("mongodb://localhost/library_db");

//Schemas
var Keywords = new mongoose.Schema({
  keyword: String
});
var Book = new mongoose.Schema({
  title: String,
  author: String,
  releaseDate: Date,
  keywords: [ Keywords ]
});

//Models
var BookModel = mongoose.model('Book', Book);


// #############################################################################
// Routing definitions
// #############################################################################



function booksAPI (server) {

  // API GET Get a list of all books
  server.get( '/api/books', function (request, response) {
    return BookModel.find( function( err, books ) {
      if (err) throw err;
      return response.send( books );
    });
  });


  // API POST Insert a new book
  server.post( '/api/books', function (request, response) {
    var book = new BookModel({
      title: request.body.title,
      author: request.body.author,
      releaseDate: request.body.releaseDate,
      keywords: request.body.keywords
    });
    book.save(function (err) {
      if (err) throw err;
      console.log('created');
      return response.send(book);
    });
  });

  // API GET by ID Get a single book by id
  server.get( '/api/books/:id', function (request, response) {
    return BookModel.findById( request.params.id, function (err, book) {
      if (err) throw err;
      return response.send(book);
    });
  });

  // API PUT Update a book
  server.put('/api/books/:id', function (request, response) {
    console.log('Updating book ' + request.body.title);
    return BookModel.findById( request.params.id, function (err, book) {
      book.title = request.body.title;
      book.author = request.body.author;
      book.releaseDate = request.body.releaseDate;
      book.keywords = request.body.keywords;

      return book.save(function(err) {
        if (err) throw err;
        console.log('book updated');
        return response.send( book );
      });
    });
  });

  // API DELETE Delete a book
  server.delete( '/api/books/:id', function (request, response) {
    console.log( 'Deleting book with id: ' + request.params.id );
    return BookModel.findById( request.params.id, function( err, book ) {
      return book.remove( function (err) {
        if (err) throw err;
        console.log( 'Book removed' );
        return response.send( '' );
      });
    });
  });
}

// #############################################################################
// Module exports
// #############################################################################

module.exports = exports = linksAPI;
*/