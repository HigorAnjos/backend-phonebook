const express = require('express');
const auth = require('../../middlewares/auth');
const list = require('./list');
const create = require('./create');

const router = express.Router({ mergeParams: true });

router.get('/', auth, list);
router.get('/create', auth, create);

module.exports = router;