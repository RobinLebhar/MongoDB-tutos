
const assert = require('assert');
const Book = require('../src/books');

describe('Test du delete', () => {
  let book1;


  beforeEach((done) => {
    book1 = new Book({ title: 'Odyssée' });
    book1.save()
      .then(() => done());
  });

  it('Suppression sur une instance ', (done) => {
    // Le remove supprime et save 
    book1.remove()
      .then(() => Book.findOne({ title: 'Odyssée' }))
      .then((book) => {
        assert(book === null);
        done();
      });
  });

  it('Suppression en passant par le model', (done) => {
    // Remove a bunch of records with some given criteria
    Book.remove({ title: 'Odyssée' })
      .then(() => Book.findOne({ title: 'Odyssée' }))
      .then((book) => {
        assert(book === null);
        done();
      });
  });

  it('Suppression par findOneAndRemove', (done) => {
    Book.findOneAndRemove({ title: 'Odyssée' })
      .then(() => Book.findOne({ title: 'Odyssée' }))
      .then((book) => {
        assert(book === null);
        done();
      });
  });

  it('Suppresion par findByIdAndRemove', (done) => {
    Book.findByIdAndRemove(book1._id)
      .then(() => Book.findOne({ title: 'Odyssée' }))
      .then((book1) => {
        assert(book1 === null);
        done();
      });
  });
    
});
