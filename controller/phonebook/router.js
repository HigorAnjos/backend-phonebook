const express = require('express');
const getAllById = require('./getAllById');
const router = express.Router({ mergeParams: true });

router.get('/:id', getAllById);

module.exports = router;