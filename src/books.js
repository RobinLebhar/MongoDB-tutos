const mongoose = require('mongoose');

//Instanciation de l'objet permettant de definir un schéma.
const Schema = mongoose.Schema;

//Création d'un schema Book constitué d'un titre de type String.
const BookSchema = new Schema({
    title:String,
    totalPages: { type: Number, default: 0 }
});

//Création d'un model de Book basée sur le Schema défini.
const Book = mongoose.model('book',BookSchema);

//Exportation du model Book pour pouvoir y accéder de l'exterieur.
module.exports = Book;

