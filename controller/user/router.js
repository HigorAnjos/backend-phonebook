const express = require('express');
const login = require('./login');
const create = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/', login);
router.post('/create', create);

module.exports = router;
