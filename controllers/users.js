const User = require('../models/user');

function newRoute(req, res) {
  res.render('users/index');
}

function createRoute(req, res){
  User
    .create(req.body)
    .then(() => {
      req.flash('happy', 'Thanks for registering with us! Now, please log in.');
      res.redirect('/login');

    })
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.status(400).render('users/index', {message: err.toString()});
      }
    });
}


function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      return res.render('users/show', { user });
    })
    .catch(next);
}

function editRoute(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      return res.render('users/edit', { user });
    })
    .catch(next);
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
    .then((user) => res.redirect(`/users/${user._id}`))
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
    .then(() => res.redirect('/'));
}


module.exports = {
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
