const express = require('express');
const router = express.Router();
const users = require('./users');

// Calls this middleware on every request
// We can split out routes for each controller into individual files
// or define them all in here

router.use(users);


// renders index.html in /views

router.get('/', (req, res) => {
  res.render('index.html');
});

module.exports = router;
