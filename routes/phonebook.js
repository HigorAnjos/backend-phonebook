const express = require('express');
const auth = require('../middlewares/auth');
const { list, find, create, update, remove } = require('../controller/phonebook');

const router = express.Router({ mergeParams: true });

router.get('/list', auth, list);
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

router.get('/find/:id', auth, find);
/**
 * @swagger
 *  /phonebook/find/{id}:
 *   get:
 *     tags: [Phonebook]
 *     description: Buscar um contato
 *     parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *     example:
 *        id: 2
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
 *               contact:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   phone:
 *                     type: string
 *             example:
 *               userId: 1
 *               contact: { "id": 1, "name": "alguem","phone": "+380967891234" }
 *       404:
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *             example:
 *               message: Contato não encontrado
 *
 */

router.post('/create', auth, create);
/**
 * @swagger
 *  /phonebook/create:
 *   post:
 *     tags: [Phonebook]
 *     description: Cria um novo contato
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
 *               phone:
 *             example:
 *              name: higor anjos
 *              phone: "+5511985145589"
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *             example:
 *               id: 5
 *       404:
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *             example:
 *               message: Não foi possivel cadastrar o numero
 *
 */

router.put('/update/:id', auth, update);
/**
 * @swagger
 *  /phonebook/update/{id}:
 *   put:
 *     tags: [Phonebook]
 *     description: Buscar um contato
 *     parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *     example:
 *        id: 2
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
 *               phone:
 *             example:
 *              name: higor anjos Up
 *              phone: "+5511985145589"
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *             example:
 *               message: Numero atualizado com sucesso
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *             example:
 *               message: Não foi possivel atualizar o numero
 *
 */

router.delete('/delete/:id', auth, remove);
/**
 * @swagger
 *  /phonebook/delete/{id}:
 *   delete:
 *     tags: [Phonebook]
 *     description: Buscar um contato
 *     parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *     example:
 *        id: 2
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
 *               phone:
 *             example:
 *              name: higor anjos Up
 *              phone: "+5511985145589"
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *             example:
 *               error: Não foi possivel remover o numero
 *
 */

module.exports = router;
