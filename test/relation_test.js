
const assert = require('assert');
const User = require('../src/users');



describe('Test de relation', () => {
    it("Test qu'un titre est bien present comme attribut pour le livre", (done) => {
        const user1 = new User({
         name: 'Robin',
         books: [{ title: 'Le seigneur des anneaux' }, {title:'Les raisins de la colère'}]
    });

    user1.save()
      .then(() => User.findOne({ name: 'Robin' }))
      .then((user) => {
        assert(user1.books.length===2);
        done();
      });
     });

     it("Test qu'un livre à bien été ajouté à un utilisateur", (done) => {
        const user1 = new User({
            name: 'Robin',
        });
        user1.books.push({title:'Le seigneur des anneaux'});

        user1.save().then( () => {
           User.findOne({name:'Robin'}).then((userFound)=>{
            assert(userFound.books.length===1);
            done();
           })
       })
       
     });

     it("Supprime les livres d'un user", (done) => {
        const user1 = new User({
           name: 'Robin',
           books: [{ title: 'Le seigneur des anneaux' }, {title:'Les raisins de la colère'}]
        });
        user1.books[0].remove();
           user1.save().then( () => {
            User.findOne({name:'Robin'}).then((userFound)=>{
            assert(userFound.books.length===1);
            done();
           });
        });
       
     });
});

