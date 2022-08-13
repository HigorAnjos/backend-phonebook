const express = require('express');
const auth = require('../middlewares/auth');
const { list, find, create, update, remove } = require('../controller/phonebook');

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 *  /phonebook/list:
 *   get:
 *     tags: [Phonebook]
 *     description: Listar todos os contato
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               phonebook:
 *                 type: array
 *                 items:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: integer
 *                    name:
 *                      type: string
 *                    phone:
 *                      type: string
 *                    createdAt:
 *                      type: string
 *                    updatedAt:
 *                      type: string
 *                    user_id:
 *                      type: integer
 *             example:
 *               userId: 1
 *               phonebook: [{ "id": 1, "name": "alguem","phone": "+380967891234", "createdAt": "2022-06-15T04:36:40.000Z", "updatedAt": "2022-06-15T04:36:40.000Z", "user_id": 1 }]
 *
 */
router.get('/list', auth, list);
router.get('/find/:id', auth, find);
router.post('/create', auth, create);
router.put('/update/:id', auth, update);
router.delete('/delete/:id', auth, remove);

module.exports = router;
