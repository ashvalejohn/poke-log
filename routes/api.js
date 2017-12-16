const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/session', require('./session'));
router.use('/pokes', require('./pokes'));
router.use('/bleeds', require('./bleeds'));

module.exports = router;
