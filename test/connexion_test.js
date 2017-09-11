// librairie pour discuter avec mongodb en js
const mongoose = require('mongoose');
const Book = require('../src/books');
const BlogBook = require('../src/blogBooks');
mongoose.Promise = global.Promise;
// Ne passera pas a la suite si ce n'est pas fait.

before((done) => {
    mongoose.connect('mongodb://localhost/books_test',{
    useMongoClient: true,   
});
    mongoose.connection
    .once('open',() => done())
    .on('error',(error) => {
        console.warn('Warning',error);
    });
})


// Voir le nom en base ( tout en minuscule )
beforeEach('Supprime les anciens livres avant chaque tests' ,(done) => {
    const { books,blogbooks,users } = mongoose.connection.collections;
    books.drop( () => {
       users.drop( () => {
           blogbooks.drop( ()=> {
                done();
           });
        });
    }); 
})

