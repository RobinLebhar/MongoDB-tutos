// librairie pour discuter avec mongodb en js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books_test',{
    useMongoClient: true,   
});
mongoose.connection
    .once('open',() => console.log("Bravo ! Connexion établie"))
    .on('error',(error) => {
        console.warn('Erreurs : ',error);
    });
