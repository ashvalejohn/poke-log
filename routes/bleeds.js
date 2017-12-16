const express = require('express');
const router = express.Router();
const { index } = require('../controllers/bleeds_controller');

router.get('/', index);

module.exports = router;
