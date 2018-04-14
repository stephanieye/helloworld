const router = require('express').Router();

const reviews = require('../controllers/reviews');
const parks = require('../controllers/parks');
const users = require('../controllers/users');
const sessions = require('../controllers/sessions');

function secureRoute(req, res, next){
  if(!req.session.userId){
    return req.session.regenerate(()=>{
      req.flash('danger', 'Please log in first or create an account');
      res.redirect('/');
    });
  }
  return next();
}

router.get('/', (req, res) => res.render('home'));

//authenticating the user
router.route('/createaccount')
  .get(users.new)
  .post(users.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

//reviews
router.route('/reviews')
  .get(secureRoute, reviews.index)
  .post(secureRoute, reviews.create);


router.route('/reviews/new') //this must be first
  .get(secureRoute, reviews.new);


//rubbish to link to park
router.route('/reviews/park')
  .get(secureRoute, reviews.park);
//rubbish

router.route('/reviews/:id')
  .get(reviews.show)
  .delete(reviews.delete)
  .put(reviews.update);

router.route('/reviews/:id/edit')
  .get(reviews.edit);

//parks

router.route('/parks')
  .get(parks.index)
  .post(parks.create);

router.route('/parks/new') //this must be first
  .get(parks.new);

router.route('/parks/:id')
  .get(parks.show)
  .delete(parks.delete)
  .put(parks.update);

router.route('/parks/:id/edit')
  .get(parks.edit);

router.route('/parks/:id/newreview')
  .get(parks.newreview);

// router.route('/parks/:id/reviews/:id')
//   .get(parks.reviews.show)
//   .delete(parks.reviews.delete)
//   .put(parks.reviews.update);

//404 not found
router.route('/*').get((req, res) => {
  req.flash('danger', 'Sorry, that page does not exist');
  res.redirect('/');
});

module.exports = router;
