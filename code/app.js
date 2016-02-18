/**
 * Created by Akilaz on 2/11/2016.
 */

var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./model/bookModel');


var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/books')
    .get(function (req, res) {
        Book.find(function(err, book){
            if(err){
                console.log(err);
            }else{
                res.json(book);
            }
        });
    });

app.use('/api', bookRouter);

app.get('/', function (req, res) {
    res.send('Welcome to my API');
});

app.listen(port, function () {
    console.log('Running on port :' + port);
})