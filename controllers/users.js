const User = require('../models/user');

function newRoute(req, res) {
  res.render('users/index');
}

function createRoute(req, res){
  User
    .create(req.body)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.status(400).render('users/index', {message: err.toString()});
      }
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
