var express = require('express');
var router = express.Router();
const passport = require('passport');
const SessionsController = require('../controllers/sessions_controller');


router.post('/', passport.authenticate('local-signin'), SessionsController.create);

router.delete('/', (req, res, next) => {
  // console.log('request for /api/users/:id');
  // res.send(`This is the user SHOW page for ${req.params.id}`);
});


module.exports = router;
