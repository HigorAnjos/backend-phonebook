const express = require('express');
const list = require('./list');
const router = express.Router({ mergeParams: true });

router.get('/:id', list);

module.exports = router;