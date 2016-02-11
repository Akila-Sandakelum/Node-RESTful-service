/**
 * Created by Akilaz on 2/11/2016.
 */

var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req,res){
    res.send('Hello World');
});

app.listen(port, function(){
    console.log('Running for warrenty :'+ port);
})