const express = require('express');
const auth = require('../../middlewares/auth');
const list = require('./list');
const router = express.Router({ mergeParams: true });

router.get('/:id', auth, list);

module.exports = router;