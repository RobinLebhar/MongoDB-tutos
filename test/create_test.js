const assert = require('assert');
const Book = require('../src/books');

describe('Test du create', () => {
    it("Sauvegarde un livre et s'assure qu'il est bien sauvé", (done) => {
            const book1 = new Book({title:"Harry Potter"});
            book1.save().then(() => {
                assert(!book1.isNew);
                done();
            });
     });
});