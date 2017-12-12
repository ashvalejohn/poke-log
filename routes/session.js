var express = require('express');
var router = express.Router();
const passport = require('passport');
const { create, destroy } = require('../controllers/sessions_controller');


router.post('/', passport.authenticate('local-signin'), create);
router.delete('/', destroy);


module.exports = router;
