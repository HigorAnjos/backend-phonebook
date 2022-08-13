const express = require('express');
const auth = require('../middlewares/auth');
const { login, create, update, remove } = require('../controller/user');

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 *  /user:
 *   post:
 *     tags: [User]
 *     description: Login usuario
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
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                  error: Senha ou email incorretos
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
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                  error: Não foi possivel atualizar o usuário
 *
 */
router.put('/update', auth, update);

/**
 * @swagger
 *  /user/delete:
 *   delete:
 *     tags: [User]
 *     description: Deleta um usuario
 *     security:
 *      - bearerAuth: []
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
 *                  message: Usuário removido com sucesso
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                  error: Não foi possivel remover o usuário
 *
 */
router.delete('/delete', auth, remove);

module.exports = router;
