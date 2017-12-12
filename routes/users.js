var express = require('express');
var router = express.Router();
const passport = require('passport');
const UsersController = require('../controllers/users_controller');


router.get('/', (req, res, next) => {
  console.log('request for /api/users');
  res.send('This is the user INDEX page');
});

router.get('/:id', (req, res, next) => {
  console.log('request for /api/users/:id');
  res.send(`This is the user SHOW page for ${req.params.id}`);
});

// router.post('/', (req, res) => {
//   console.log("WE'RE HERE !!!!!");
//   console.log(req.body);
//   console.log('-----------------------------------------------------------');
//   res.send('hi');
// });
router.post('/', passport.authenticate('local-signup'), UsersController.create);

module.exports = router;
