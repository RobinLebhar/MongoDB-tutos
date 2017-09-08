const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test',{
    useMongoClient: true,   
});
mongoose.connection
    .once('open',() => console.log("Bravo tu es connecté ! Connexion établie"))
    .on('error',(error) => {
        console.warn('Warning',error);
    });