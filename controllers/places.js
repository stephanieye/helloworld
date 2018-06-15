const place = require('../models/place');

function placesIndex(req, res) {
  place
    .find()
    .populate('user user.username comments comments.commenter')
    .exec()
    .then(places => {
      res.render('places/index', {places});
    });
}

function placesAccount(req, res) {
  place
    .find()
    .populate('user user.username comments comments.commenter')
    .exec()
    .then(places => {
      res.render('places/account', {places});
    });
}


function placesShow(req, res) {
  place
    .findById(req.params.id)
    .populate('user user.username comments comments.commenter')
    .exec()
    .then(place => {
      res.render('places/show', {place});
    });
}


function placesNew(req, res) {
  res.render('places/new', {error: null});
}

function placesCreate(req, res) {
  req.body.user = req.currentUser;
  place
    .create(req.body)
    .then(() => res.redirect('/places'))
    .catch((error) => {
      if(error.name === 'ValidationError') {
        return res.badRequest('/places/new', error.toString());
      }
    });
}

function placesEdit(req, res) {
  place
    .findById(req.params.id)
    .populate('user comments comments.commenter')
    .exec()
    .then(place => res.render('places/edit', {place}));
}

function placesUpdate(req, res) {
  place
    .findById(req.params.id)
    .exec()
    .then(place => {
      place = Object.assign(place, req.body);
      return place.save();
    })
    .then(place => res.redirect(`/places/${place._id}`));
}

function placesDelete(req, res) {
  place
    .findById(req.params.id)
    .exec()
    .then(place => place.remove())
    .then(() => res.redirect('/places'));
}


function commentCreateRoute(req, res) {

  place
    .findById(req.params.id)
    .populate('user user.username comments comments.commenter')
    .exec()
    .then(place => {
      req.body.commenter = req.currentUser;
      place.comments.push(req.body);
      console.log(req.body);
      return place.save();

    })
    .then(place => {
      res.redirect(`/places/${place._id}`);
    })
    .catch(err => console.log(err));
}

function commentDeleteRoute(req, res) {
  place
    .findById(req.params.id)
    .exec()
    .then(place => {
      const comment = place.comments.id(req.params.commentId);
      comment.remove();
      return place.save();
    })
    .then(place => res.redirect(`/places/${place._id}`));
}


function commentEditRoute(req, res) {
  place
    .findById(req.params.id)
    .populate('user user.username comments comments.commenter')
    .exec()
    .then(place => {
      const comment = place.comments.id(req.params.commentId);
      res.render('places/commentedit', { place, comment });
    });
}


function commentUpdateRoute(req, res) {
  place
    .findById(req.params.id)
    .exec()
    .then(place => {
      var comment = place.comments.id(req.params.commentId);
      comment = Object.assign(comment, req.body);
      comment.save();
      return place.save();
    })
    .then(place => res.redirect(`/places/${place._id}`));
}



module.exports = {
  index: placesIndex,
  account: placesAccount,
  show: placesShow,
  delete: placesDelete,
  new: placesNew,
  create: placesCreate,
  edit: placesEdit,
  update: placesUpdate,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute,
  commentEdit: commentEditRoute,
  commentUpdate: commentUpdateRoute
};
