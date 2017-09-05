const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test',{
    useMongoClient: true,   
});
mongoose.connection
    .once('open',() => console.log("Bravo t'es chaud comme une baraque à frite ! Connexion établie"))
    .on('error',(error) => {
        console.warn('Warning',error);
    });