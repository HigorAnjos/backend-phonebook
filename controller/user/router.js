const express = require('express');
const auth = require('../../middlewares/auth');
const { login, create, update, remove } = require('./index');

const router = express.Router({ mergeParams: true });

router.post('/', login);
router.post('/create', create);
router.put('/update', auth, update);
router.delete('/delete', auth, remove);

module.exports = router;
