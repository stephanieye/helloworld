const router = require('express').Router();
const places = require('../controllers/places');
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

//Show all users
router.route('/users')
  .get(secureRoute, users.index);

// Show user page
router.route('/users/:id')
  .get(secureRoute, users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/users/:id/edit')
  .get(secureRoute, users.edit);


//places

router.route('/places')
  .get(secureRoute, places.index)
  .post(secureRoute, places.create);

router.route('/places/account')
  .get(secureRoute, places.account);

router.route('/places/new')
  .get(secureRoute, places.new);

router.route('/places/:id')
  .get(secureRoute, places.show)
  .delete(secureRoute, places.delete)
  .put(secureRoute, places.update);

router.route('/places/:id/edit')
  .get(secureRoute, places.edit);

router.route('/places/:id/comments')
  .post(secureRoute, places.commentCreate);

router.route('/places/:id/comments/:commentId')
  .delete(secureRoute, places.commentDelete)
  .put(secureRoute, places.commentUpdate);


router.route('/places/:id/comments/:commentId/commentedit')
  .get(secureRoute, places.commentEdit);


//404 not found
router.route('/*').get((req, res) => {
  req.flash('danger', 'Sorry, that page does not exist');
  res.redirect('/');
});



module.exports = router;
