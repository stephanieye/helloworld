const Park = require('../models/park');


function parksIndex(req, res) {
  Park
    .find()
    .populate('review')
    .exec()
    .then(parks => {
      res.render('parks/index', {parks});
    });
}

function parksShow(req, res) {
  Park
    .findById(req.params.id)
    .exec()
    .then(park => {
      res.render('parks/show', {park});
    });
}







function parksNew(req, res) {
  res.render('parks/new', {error: null});
}

function parksCreate(req, res) {
  req.body.user = req.currentUser;
  Park
    .create(req.body)
    .then(() => res.redirect('/parks'))
    .catch((error) => {
      if(error.name === 'ValidationError') {
        return res.badRequest('/parks/new', error.toString());
      }
    });
}

function parksEdit(req, res) {
  Park
    .findById(req.params.id)
    .exec()
    .then(park => res.render('parks/edit', {park}));
}

function parksUpdate(req, res) {
  Park
    .findById(req.params.id)
    .exec()
    .then(park => {
      park = Object.assign(park, req.body);
      return park.save();
    })
    .then(park => res.redirect(`/parks/${park._id}`));
}

function parksDelete(req, res) {
  Park
    .findById(req.params.id)
    .exec()
    .then(park => park.remove())
    .then(() => res.redirect('/parks'));
}

function parksNewReview(req, res) {
  Park
    .findById(req.params.id)
    .exec()
    .then(park => res.render('parks/newreview', {park}));
}

// function parksReviewCreate(req, res) {
//   req.body.user = req.currentUser;
//   Park
//     .create(req.body)
//     .then(() => res.redirect('/park._id'))
//     .catch((error) => {
//       if(error.name === 'ValidationError') {
//         return res.badRequest('/parks/newreview', error.toString());
//       }
//     });
// }
//
//
// function parksReviews(req, res) {
//   Park
//     .findById(req.params.id)
//     .exec()
//     .then(park => {
//       res.render('parks/show', {park});
//     });
// }
//

module.exports = {
  index: parksIndex,
  show: parksShow,
  delete: parksDelete,
  new: parksNew,
  create: parksCreate,
  edit: parksEdit,
  update: parksUpdate,
  newreview: parksNewReview
  // reviewcreate: parksReviewCreate,
  // reviews: parksReviews
};
