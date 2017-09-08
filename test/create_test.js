const assert = require('assert');
const Book = require('../src/books');

describe('Creation de livre', () => {
    it("Sauvegarde un livre et s'assure qu il n'est pas deja en base", (done) => {
            const book1 = new Book({title:"Harry Potter"});
            book1.save( () => {
                assert(!book1.isNew);
                done();
            });
            

    })
})