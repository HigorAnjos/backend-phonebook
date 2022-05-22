const express = require('express');
const auth = require('../../middlewares/auth');
const list = require('./list');
const router = express.Router({ mergeParams: true });

router.get('/', auth, list);

module.exports = router;