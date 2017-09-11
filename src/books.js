const mongoose = require('mongoose');

//Instanciation de l'objet permettant de definir un schéma.
const Schema = mongoose.Schema;

//Création d'un schema Book constitué d'un titre de type String.
const BookSchema = new Schema({
    title: {
        type : String,
        required:[true,'Le titre est requis'],
        
    }, 
    totalPages: { 
        type: Number,
         default: 0,
          validate: {
             validator: (totalPages) => totalPages < 3000,
             message: 'Un livre doit avoir moins de 3000 pages'
        }, 
         
    }
});

//Création d'un model de Book basée sur le Schema défini.
const Book = mongoose.model('book',BookSchema);

//Exportation du model Book pour pouvoir y accéder de l'exterieur.
module.exports = Book;

