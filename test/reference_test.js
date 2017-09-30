const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/users');
const BlogBook = require('../src/blogBooks');
const Comment = require('../src/comments');

describe('Test de references', () => {
   let robin, blogBook, comment;

  beforeEach((done) => {
      
    robin = new User({ name: 'Robin' });
    blogBook = new BlogBook({ title: 'Les fourmis', summary: 'Les fourmis : un livre qui concerne, les fourmis...' });
    comment = new Comment({ content: 'Wao génial super comme livre !' });

    robin.blogBooks.push(blogBook);
    blogBook.comments.push(comment);
    comment.user = robin;

   Promise.all([robin.save(),blogBook.save(),comment.save()]).then( () => {
       done();
   });
  });

 it('Test les le titre du livre d un user ', (done) => {
           User.findOne({ name: 'Robin'}).populate('blogBooks').then((user) => {
           assert(user.blogBooks[0].title=="Les fourmis");
            done();
        });
      });

  it('Test le commentaire du livre d un user ', (done) => {
           User.findOne({ name: 'Robin'}).populate({
               path:'blogBooks',
               populate:{
                   path: 'comments',
                   model: 'comment'
               }
           }).then( (user) => {
               assert(user.blogBooks[0].comments[0].content==='Wao génial super comme livre !' );
               done();
           });
           
        }); 
});
