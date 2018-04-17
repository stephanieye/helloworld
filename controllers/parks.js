const Park = require('../models/park');


function parksIndex(req, res) {
  Park
    .find()
    .populate('reviews review.user')
    .exec()
    .then(parks => {
      res.render('parks/index', {parks});
    });
}
function parksAccount(req, res) {
  Park
    .find()
    .populate('reviews review.user')
    .exec()
    .then(parks => {
      res.render('parks/account', {parks});
    });
}



function parksShow(req, res) {
  Park
    .findById(req.params.id)
    .populate('reviews.user')
    .exec()
    .then(park => {
      res.render('parks/show', {park});
    });
}



function parksNew(req, res) {
  res.render('parks/new', {error: null});
}

function parksCreate(req, res) {
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
    .populate('reviews review.user')
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


function reviewCreateRoute(req, res) {
  req.body.user = req.currentUser;
  Park
    .findById(req.params.id)
    .populate('users')
    .then(park => {
      park.reviews.push(req.body);
      return park.save();
    })
    .then(park => res.redirect(`/parks/${park._id}`));
}

function reviewDeleteRoute(req, res) {
  Park
    .findById(req.params.id)
    .then(park => {
      const review = park.reviews.id(req.params.reviewId);
      review.remove();
      return park.save();
    })
    .then(() => res.redirect('/parks/account'));
}


function reviewEditRoute(req, res) {
  Park
    .findById(req.params.id)
    .then(park => {
      const review = park.reviews.id(req.params.reviewId);
      res.render('parks/reviewedit', { park, review });
    });
}


function reviewUpdateRoute(req, res) {
  Park
    .findById(req.params.id)
    .exec()
    .then(park => {
      var review = park.reviews.id(req.params.reviewId);
      review = Object.assign(review, req.body);
      review.save();
      return park.save();
    })
    .then(park => res.redirect(`/parks/${park._id}`));
}



module.exports = {
  index: parksIndex,
  account: parksAccount,
  show: parksShow,
  delete: parksDelete,
  new: parksNew,
  create: parksCreate,
  edit: parksEdit,
  update: parksUpdate,
  reviewCreate: reviewCreateRoute,
  reviewDelete: reviewDeleteRoute,
  reviewEdit: reviewEditRoute,
  reviewUpdate: reviewUpdateRoute
};
