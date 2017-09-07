const assert = require('assert');
const Book = require('../src/books');

describe('Creation de livre', () => {
    it('Sauvegarde un livre', () => {
            const book1 = new Book({title:"Harry Potter"});
            book1.save();

    })
})