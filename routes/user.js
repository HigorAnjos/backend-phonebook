const express = require('express');
const auth = require('../middlewares/auth');
const { login, create, update, remove } = require('../controller/user');

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 *  /user:
 *   post:
 *     tags: [User]
 *     description: Login de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *              email: higorc.anjos@gmail.com
 *              password: "123456"
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *               example:
 *                  token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *
 */
router.post('/', login);

/**
 * @swagger
 *  /user/create:
 *   post:
 *     tags: [User]
 *     description: Criar um novo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *              name: higor anjos
 *              email: higorc.anjos@gmail.com
 *              password: "123456"
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: decimal
 *               example:
 *                  id: 5
 *
 */
router.post('/create', create);

/**
 * @swagger
 *  /user/update:
 *   put:
 *     tags: [User]
 *     description: Atualiza dados do usuario
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *              name: higor anjos
 *              email: higorc.anjos@gmail.com
 *              password: "123456"
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                  message: Usuário atualizado com sucesso
 *
 */
router.put('/update', auth, update);
router.delete('/delete', auth, remove);

module.exports = router;
