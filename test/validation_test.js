
const assert = require('assert');
const Book = require('../src/books');



describe('Test de validation', () => {
    it("Test qu'un titre est bien present comme attribut pour le livre", (done) => {
           const book1 =new Book({ title :undefined });
           // force à attendre la fin de validate avant de passer à la ligne suivante
            const validationResult = book1.validateSync();
            const message = validationResult.errors.title.message
            assert (message === 'Le titre est requis');
            done();
     });

      it("Test qu'un livre à moins de 3000 pages", (done) => {
           const book1 =new Book({ title :'Les fleurs du mal', totalPages : 3001 });
            const validationResult = book1.validateSync();
            const message = validationResult.errors.totalPages.message
            assert (message === 'Un livre doit avoir moins de 3000 pages');
            done();
     });
});

