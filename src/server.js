var http = require('http');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('./users');
const BlogBook = require('./blogBooks');
const Comment = require('./comments');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    mongoose.connect('mongodb://localhost/books_test',{
    useMongoClient: true,   
    });
    mongoose.connection
    .once('open',() => console.log("Connexion établie"))
    .on('error',(error) => {
        console.log('Warning',error);
    });
     
    User.find({ name: 'Robin'}).then((users) => {
        res.end(users.toString());
    });
        
}).listen(8080);



     



