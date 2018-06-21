const Place = require('../models/place');

function placesIndex(req, res) {
  Place
    .find()
    .populate('user user.username comments comments.commenter')
    .exec()
    .then(places => {
      res.render('places/index', {places});
    })
    .catch(err => console.log(err));
}


function placesShow(req, res) {
  Place
    .findById(req.params.id)
    .populate('user user.username comments comments.commenter')
    .exec()
    .then(place => {
      res.render('places/show', {place});
    })
    .catch(err => console.log(err));
}


function placesNew(req, res) {
  res.render('places/new', {error: null});
}

function placesCreate(req, res) {
  req.body.user = req.currentUser;
  Place
    .create(req.body)
    .then((place) => res.redirect(`/places/${place._id}`))
    .catch((error) => {
      if(error.name === 'ValidationError') {
        return res.badRequest('/places/new', error.toString());
      }
    });
}

function placesEdit(req, res) {
  Place
    .findById(req.params.id)
    .populate('user comments comments.commenter')
    .exec()
    .then(place => res.render('places/edit', {place}))
    .catch(err => console.log(err));
}

function placesUpdate(req, res) {
  Place
    .findById(req.params.id)
    .exec()
    .then(place => {
      place = Object.assign(place, req.body);
      return place.save();
    })
    .then(place => res.redirect(`/places/${place._id}`))
    .catch(err => console.log(err));
}

function placesDelete(req, res) {
  Place
    .findById(req.params.id)
    .exec()
    .then(place => place.remove())
    .then(() => res.redirect(`/users/${req.currentUser.id}`))
    .catch(err => console.log(err));
}


function commentCreateRoute(req, res) {

  Place
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
  Place
    .findById(req.params.id)
    .exec()
    .then(place => {
      const comment = place.comments.id(req.params.commentId);
      comment.remove();
      return place.save();
    })
    .then(place => res.redirect(`/places/${place._id}`))
    .catch(err => console.log(err));
}


function commentEditRoute(req, res) {
  Place
    .findById(req.params.id)
    .populate('user user.username comments comments.commenter')
    .exec()
    .then(place => {
      const comment = place.comments.id(req.params.commentId);
      res.render('places/commentedit', { place, comment });
    })
    .catch(err => console.log(err));
}


function commentUpdateRoute(req, res) {
  Place
    .findById(req.params.id)
    .exec()
    .then(place => {
      var comment = place.comments.id(req.params.commentId);
      comment = Object.assign(comment, req.body);
      comment.save();
      return place.save();
    })
    .then(place => res.redirect(`/places/${place._id}`))
    .catch(err => console.log(err));
}



module.exports = {
  index: placesIndex,
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
