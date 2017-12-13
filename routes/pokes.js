const express = require('express');
const router = express.Router();
const { create } = require('../controllers/pokes_controller');

router.post('/', create);

module.exports = router;
