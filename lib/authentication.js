const User = require('../models/user');

function authentication(req, res, next) {
  if(!req.session.userId) return next();

  User
    .findById(req.session.userId)
    .then((userr) => {
      if(!userr) {
        return req.session.regenerate(() => {
          req.flash('danger', 'You are not logged in');
          return res.redirect('/login');
        });
      }

      req.currentUser = userr;

      res.locals.userr = userr;
      res.locals.isLoggedIn = true;

      next();
    });
}

module.exports = authentication;
