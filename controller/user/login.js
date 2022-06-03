const services = require('../../services/user/index');

require('dotenv').config();
const jwt = require('jsonwebtoken');

const API_SECRET = process.env.SECRET_KEY || 'mysecret';

const JWT_CONFIG = {
  expiresIn: '40h',
  algorithm: 'HS256'
};

const login = async (req, res) => {
  const { email, password: user_password } = req.body;
  // valida
  if (!email || !user_password) {
    return res.status(400).json({
      error: 'Dados incompletos'
    });
  }
  // busca usuário
  const userFound = await services.login(email, user_password);
  
  if (!userFound) {
    return res.status(400).json({
      error: 'Usuário não encontrado'
    })
  }

  if (userFound.password !== user_password) {
    return res.status(400).json({
      error: 'Senha incorreta'
    });
  }
  
  // cria token
  const {password, ...userWithoutPassword} = userFound;

  const token = jwt.sign({ data: userWithoutPassword }, API_SECRET, JWT_CONFIG);

  return res.status(200).json(token); // token
}

module.exports = login;
