const jwt = require('jsonwebtoken');
require('dotenv').config();

const API_SECRET = process.env.SECRET_KEY || 'mysecret';

const withOutBearer = (token) => {
  const auxToken = token;
  if (auxToken.slice(0, 7) === 'Bearer ') {
    return token.slice(7);
  }
  return token;
};

const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        error: 'Token não informado',
      });
    }

    try {
      const decoded = jwt.verify(withOutBearer(authorization), API_SECRET);

      const userName = decoded.data.name;
      const { id } = decoded.data;

      req.user = { id, userName };
    } catch (err) {
      return res.status(400).json({
        message: 'Token inválido',
        error: err.message,
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      message: 'Erro na autenticação',
    });
  }
};

module.exports = auth;
