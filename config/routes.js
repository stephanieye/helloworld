const router = require('express').Router();
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

// Show user page
router.route('/users/:id')
  .get(secureRoute, users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/users/:id/edit')
  .get(secureRoute, users.edit);


//parks

router.route('/parks')
  .get(parks.index)
  .post(parks.create);

router.route('/parks/account')
  .get(parks.account)
  .post(parks.create);

router.route('/parks/new')
  .get(parks.new);

router.route('/parks/:id')
  .get(parks.show)
  .delete(parks.delete)
  .put(parks.update);

router.route('/parks/:id/edit')
  .get(parks.edit);

router.route('/parks/:id/reviews')
  .post(parks.reviewCreate);

router.route('/parks/:id/reviews/:reviewId')
  .delete(parks.reviewDelete)
  .put(parks.reviewUpdate);


router.route('/parks/:id/reviews/:reviewId/reviewedit')
  .get(parks.reviewEdit);


//404 not found
router.route('/*').get((req, res) => {
  req.flash('danger', 'Sorry, that page does not exist');
  res.redirect('/');
});



module.exports = router;
