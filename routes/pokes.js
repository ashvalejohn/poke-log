const express = require('express');
const router = express.Router();


router.post('/', () => {
  console.log('this is the route for POST /api/pokes');
});

module.exports = router;
