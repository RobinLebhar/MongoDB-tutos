const assert = require('assert');
const User = require('../src/users');



describe('Test de virtualType', () => {
    it("Test que le virtualType retourne bien le nombre de livre de l'utilisateur", (done) => {
        const user1 = new User({
         name: 'Robin',
         books: [{ title: 'Le seigneur des anneaux' }, {title:'Les raisins de la colère'}]
    });

    user1.save()
      .then(() => User.findOne({ name: 'Robin' }))
      .then((user) => {
        assert(user1.countBooks===2);
        done();
      });
     });

   
});
