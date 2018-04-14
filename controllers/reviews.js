const Review = require('../models/review');


function reviewsIndex(req, res) {
  Review
    .find()
    .populate('user')
    .exec()
    .then(reviews => {
      res.render('reviews/index', {reviews});
    });
}

function reviewsShow(req, res) {
  Review
    .findById(req.params.id)
    .exec()
    .then(review => res.render('reviews/show', {review}));
}

//nonsense to try to tie review to park

function reviewsPark(req, res) {
  Review
    .findByPark(req.query.park)
    .exec()
    .then(reviews => res.render('reviews/park', {reviews}));
}

//nonsense


function reviewsNew(req, res) {
  res.render('reviews/new', {error: null});
}

function reviewsCreate(req, res) {
  req.body.user = req.currentUser;
  Review
    .create(req.body)
    .then(() => res.redirect('/reviews'))
    .catch((error) => {
      if(error.name === 'ValidationError') {
        return res.badRequest('/reviews/new', error.toString());
      }
    });
}

function reviewsEdit(req, res) {
  Review
    .findById(req.params.id)
    .exec()
    .then(review => res.render('reviews/edit', {review}));
}

function reviewsUpdate(req, res) {
  Review
    .findById(req.params.id)
    .exec()
    .then(review => {
      review = Object.assign(review, req.body);
      return review.save();
    })
    .then(review => res.redirect(`/reviews/${review._id}`));
}

function reviewsDelete(req, res) {
  Review
    .findById(req.params.id)
    .exec()
    .then(review => review.remove())
    .then(() => res.redirect('/reviews'));
}

module.exports = {
  index: reviewsIndex,
  show: reviewsShow,
  delete: reviewsDelete,
  new: reviewsNew,
  create: reviewsCreate,
  edit: reviewsEdit,
  update: reviewsUpdate,
  park: reviewsPark
};
