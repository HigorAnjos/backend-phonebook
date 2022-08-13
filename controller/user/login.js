const jwt = require('jsonwebtoken');
const services = require('../../services/user/index');

require('dotenv').config();

const API_SECRET = process.env.SECRET_KEY || 'mysecret';

const JWT_CONFIG = {
  expiresIn: '40h',
  algorithm: 'HS256',
};

const login = async (req, res) => {
  const { email, password: userInsertedPassword } = req.body;
  // valida
  if (!email || !userInsertedPassword) {
    return res.status(400).json({
      message: 'Dados incompletos',
    });
  }
  const userCanLogin = await services.login(email, userInsertedPassword);

  if (!userCanLogin) {
    return res.status(400).json({
      message: 'Senha ou email incorretos',
    });
  }

  // cria token
  const { password, ...userWithoutPassword } = userCanLogin;

  const token = jwt.sign({ data: userWithoutPassword }, API_SECRET, JWT_CONFIG);

  return res.status(200).json({ token }); // token
};

module.exports = login;
