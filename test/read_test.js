const assert = require('assert');
const Book = require('../src/books');

describe('Test du read', () => {
    let book1;
    beforeEach( (done) => {
        book1 = new Book({title:"Harry Potter"});
        book1.save().then( () => {
            done();
        });  
    })

    it("Recherche du livre Harry Potter et test qu'il à le meme id que celui inséré avant", (done) => {
        //Recherche tous les livres dont le title est Harry Potter
        Book.find({ title: 'Harry Potter'}).then((books) => {
            // Attention dans mongoDB les id sont des objets et le === ou ==  comparerait donc les adresses !
            // Utilisez la fonction equals qui elle compare les string des id
            assert(book1._id.equals(books[0]._id)); 
            done();
        });
    });          
});
  