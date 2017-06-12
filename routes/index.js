module.exports = function (app) {
  app.get('', function (req,res) {
    res.redirect('/posts');
  });
  app.use('/signup',require('./signup'));
  app.use('/siguin',require('./signin'));
  app.use('/signout',require('./signout'));
  app,use('/posts',require('./posts'));
}
