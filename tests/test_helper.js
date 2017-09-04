const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books_test',{
    useMongoClient: true,   
});
mongoose.connection
    .once('open',() => console.log("Yeah ! Connexion établie"))
    .on('error',(error) => {
        console.warn('Warning',error);
    });
