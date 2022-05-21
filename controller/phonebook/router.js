const express = require('express');
const getAllById = require('./getAll');

const router = express.Router({ mergeParams: true });

router.get('/:id', getAllById);

module.exports = router;