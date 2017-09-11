const assert = require('assert');
const Book= require('../src/books');


describe('Test du update', () => {
  let book1;
  
    beforeEach((done) => {
        book1 = new Book({ title: 'Moby Dick'});
        book1.save()
            .then(() => done());
    });

    function assertTitle(operation, done) {
        operation
            .then(() => Book.find({})).then((books) => {
                assert(books.length === 1);
                assert(books[0].title === 'Game of Thrones');
                done();
            });
    }

    it('Update sur une instance (set puis save)', (done) => {
        book1.set('title', 'Game of Thrones');
        assertTitle(book1.save(), done);
    });

   it('Update sur une instance (update)', (done) => {
        assertTitle(book1.update({ title: 'Game of Thrones'}), done);
    });

     it('Update tous les livres en passant par le model', (done) => {
        assertTitle(Book.update({ title:'Moby Dick'}, { title: 'Game of Thrones'}),done);
    });

   it('Recherche un livre par son titre et update (findOneAndUpdate) ', (done) => {
        assertTitle( Book.findOneAndUpdate({ title:'Moby Dick'}, { title: 'Game of Thrones'}), done);
    });

    it('Recherche un livre par id et update (findByIdAndUpdate)', (done) => {
        assertTitle(Book.findByIdAndUpdate(book1._id, { title: 'Game of Thrones'}),done);
    });

});
