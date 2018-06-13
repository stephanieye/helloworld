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
router.get('', (req, res) => res.render('home'));

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
  .post(secureRoute, parks.create);

router.route('/parks/account')
  .get(secureRoute, parks.account);

router.route('/parks/new')
  .get(secureRoute, parks.new);

router.route('/parks/:id')
  .get(secureRoute, parks.show)
  .delete(secureRoute, parks.delete)
  .put(secureRoute, parks.update);

router.route('/parks/:id/edit')
  .get(secureRoute, parks.edit);

router.route('/parks/:id/reviews')
  .post(secureRoute, parks.reviewCreate);

router.route('/parks/:id/reviews/:reviewId')
  .delete(secureRoute, parks.reviewDelete)
  .put(secureRoute, parks.reviewUpdate);


router.route('/parks/:id/reviews/:reviewId/reviewedit')
  .get(secureRoute, parks.reviewEdit);


//404 not found
router.route('/*').get((req, res) => {
  req.flash('danger', 'Sorry, that page does not exist');
  res.redirect('/');
});



module.exports = router;
