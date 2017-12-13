var express = require('express');
var router = express.Router();
const passport = require('passport');
const { create, update } = require('../controllers/users_controller');

router.get('/', (req, res, next) => {
  console.log('request for /api/users');
  res.send('This is the user INDEX page');
});

router.get('/:id', (req, res, next) => {
  console.log('request for /api/users/:id');
  res.send(`This is the user SHOW page for ${req.params.id}`);
});

router.patch('/', update);

router.post('/', (req, res, next) => {
  console.log('in route.......', req.body);
  passport.authenticate('local-signup', (err, user, info) => {
    if (err) {
      console.log(err);
      next(err); }
    if (!user) {
      res.status(401).json(info.message);
    } else {
      req.login(user, loginErr => {
        if (loginErr) { next(loginErr); }
      });
      create(user, res);
    }
  })(req, res, next);
});

module.exports = router;
