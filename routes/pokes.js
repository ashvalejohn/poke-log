const express = require('express');
const router = express.Router();
const { create, index } = require('../controllers/pokes_controller');

router.post('/', create);
router.get('/', index);

module.exports = router;
