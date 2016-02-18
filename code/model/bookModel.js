/**
 * Created by Akilaz on 2/18/2016.
 */

var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var bookModel = new Schema({
    title: {type: String},
    author: {type: String},
    read:{type: Boolean,default:false}
});

module.exports = mongoose.model('book', bookModel,"book");