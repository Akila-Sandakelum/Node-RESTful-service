/**
 * Created by Akilaz on 2/11/2016.
 */

var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/BookAPI');

var Book = require('./model/bookModel');


var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

// Retrieving all the books
bookRouter.route('/books')
    .get(function (req, res) {

        var query = {};
        if(req.query.read){
            query.read = req.query.read;
        }
        Book.find(query, function(err, books){
            if(err){
                //res.status(500).send(err);
                console.log(err);
            }else{
                res.json(books);
            }
        });
    });

// Retrieving a single book by its bookid
bookRouter.route('/books/:bookId')
    .get(function (req, res) {
        Book.findById(req.params.bookId, function(err, books){
            if(err){
                //res.status(500).send(err);
                console.log(err);
            }else{
                res.json(books);
            }
        });
    });

app.use('/api', bookRouter);

app.get('/', function (req, res) {
    res.send('Welcome to my API');
});

app.listen(port, function () {
    console.log('Running on port :' + port);
});