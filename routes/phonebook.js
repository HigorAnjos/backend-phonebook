const express = require('express');
const auth = require('../middlewares/auth');
const { list, find, create, update, remove } = require('../controller/phonebook');

const router = express.Router({ mergeParams: true });

router.get('/list', auth, list);
router.get('/find/:id', auth, find);
router.post('/create', auth, create);
router.put('/update/:id', auth, update);
router.delete('/delete/:id', auth, remove);

module.exports = router;
