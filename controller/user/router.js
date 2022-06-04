const express = require('express');
const { login, create } = require('./index');

const router = express.Router({ mergeParams: true });

router.post('/', login);
router.post('/create', create);

module.exports = router;
