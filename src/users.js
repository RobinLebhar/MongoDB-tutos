const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = require('./books').schema;
const BlogBook = require('../src/blogBooks');

const UserSchema = new Schema({
  name: String,
  books:[BookSchema],
  blogBooks:[{
    type : Schema.Types.ObjectId, 
    ref: 'blogBook'
  }]
});

UserSchema.virtual('countBooks').get(function() {
  return this.books.length;
});

// On veut supprimer tout ses livres avant de le supprimer lui.

UserSchema.pre('remove',function(next) {
  // Supprime les BlogBook dont l'ID est DANS this.blogBooks ( les blogBooks de l'utilisateur )
  BlogBook.remove({_id: {$in : this.blogBooks}}).then(() => {
    next();
  });
  
});

//Création d'un model de Book basée sur le Schema défini.
const User = mongoose.model('user',UserSchema);
module.exports = User;