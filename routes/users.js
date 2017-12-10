var express = require('express');
var router = express.Router();


router.get('/api/users', (req, res, next) => {
  console.log('request for /api/users');
  res.send('This is the user show page');
});

router.get('/api/users/:id', (req, res, next) => {
  console.log('request for /api/users/:id');
  res.send(`This is the user show page for ${req.params.id}`);
});

module.exports = router;
