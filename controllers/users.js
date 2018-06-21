const User = require('../models/user');
const Place = require('../models/place');

function newRoute(req, res) {
  res.render('users/register');
}

function createRoute(req, res){
  User
    .create(req.body)
    .then(() => {
      req.flash('happy', 'Thanks for registering with Hello World! Now, please log in.');
      res.redirect('/login');
    })
    .catch((err) => {
      if(err.name === 'ValidationError') {
        req.flash('danger', 'Sorry, you might have typed something incorrectly while registering. Please try again.');
        return res.status(400).render('users/register', {message: err.toString()});
      } else if(err.name === 'BulkWriteError') {
        req.flash('danger', 'Sorry, that username or email is taken. Please try again.');
        return res.status(400).render('users/register', {message: err.toString()});
      } else {
        req.flash('danger', 'Sorry, something went wrong. Please try again.');
        return res.status(400).render('users/register', {message: err.toString()});
      }

    });
}

function indexRoute(req, res) {
  User
    .find()
    .then(users => {
      res.render('users/index', {users});
    })
    .catch(err => console.log(err));
}



function showRoute(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      return Place
        .find()
        .populate('user user.username comments comments.commenter')
        .exec()
        .then(places => {
          res.render('users/show', { user, places });
        });
    })
    .catch(err => console.log(err));
}

function editRoute(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      return res.render('users/edit', { user });
    })
    .catch(err => console.log(err));
}

function updateRoute(req, res, next) {
  if(req.body.password.length === 0) {
    delete req.body.password;
    delete req.body.passwordConfirmation;
  }
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      user = Object.assign(user, req.body);

      return user.save();
    })
    .then(() => res.redirect(`/users/${req.currentUser.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        res.badRequest(`/users/${req.params.id}/edit`, err.toString());
      }
      next(err);
    });
}

function deleteRoute(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => user.remove())
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
}


module.exports = {
  new: newRoute,
  create: createRoute,
  index: indexRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
