var express = require('express');
var router = express.Router();
const passport = require('passport');
const { create, destroy } = require('../controllers/sessions_controller');


router.post('/', (req, res, next) => {
  passport.authenticate('local-signin', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) {
      res.status(401).json(info.message);
    } else {
      req.login(user, error => {
        if (error) { next(error); }
        create(user, res);
      });
    }
  })(req, res, next);
});

router.delete('/', destroy);


module.exports = router;
