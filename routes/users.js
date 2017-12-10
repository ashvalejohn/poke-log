var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
  console.log('request for /api/users');
  res.send('This is the user INDEX page');
});

router.get('/:id', (req, res, next) => {
  console.log('request for /api/users/:id');
  res.send(`This is the user SHOW page for ${req.params.id}`);
});

module.exports = router;
