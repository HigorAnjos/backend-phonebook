const express = require('express');
const auth = require('../../middlewares/auth');
const list = require('./list');
const create = require('./create');
const find = require('./find');
const update = require('./update');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.get('/', auth, list);
router.post('/create', auth, create);
router.get('/list', auth, list);
router.get('/find/:id', auth, find);
router.put('/update/:id', auth, update);
router.delete('/delete/:id', auth, remove);

module.exports = router;
