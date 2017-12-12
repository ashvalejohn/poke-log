var express = require('express');
var router = express.Router();
const passport = require('passport');
const { create, destroy } = require('../controllers/sessions_controller');


router.post('/', passport.authenticate('local-signin'), create);

// router.delete('/', (req, res) => {
//   console.log('delete request....................');
//   res.send('got delete request');
// });
router.delete('/', destroy);


module.exports = router;
