const assert = require('assert');
const BlogBook = require('../src/blogBooks');
const User = require('../src/users');
const Comment = require('../src/comments');


describe('Test de middleware', () => {
    it("Test que les blogBooks d'un user sont bien supprimés lors de la suppression du user", (done) => {
            robin = new User({ name: 'Robin' });
            blogBook = new BlogBook({ title: 'Les fourmis', summary: 'Les fourmis : un livre qui concerne, les fourmis...' });
            comment = new Comment({ content: 'Wao génial super comme livre !' });

            robin.blogBooks.push(blogBook);
            blogBook.comments.push(comment);
            comment.user = robin;

            Promise.all([robin.save(),blogBook.save(),comment.save()]).then( () => {
                robin.remove().then( () => {
                   BlogBook.count().then( (count)=>{
                        assert(count===0);
                        done();
                    });
                });
            });
     });

});

