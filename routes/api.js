const express = require('express');
const router = express.Router();

// We can split out routes for each controller into individual files
// or define them all in here

router.use('/users', require('./users'));


// router.get('/users', (req, res, next) => {
//   console.log('request for /api/users');
//   res.send('This is the user INDEX page');
// });
//
// router.get('/users/:id', (req, res, next) => {
//   console.log('request for /api/users/:id');
//   res.send(`This is the user SHOW page for ${req.params.id}`);
// });


module.exports = router;
