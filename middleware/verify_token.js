const jwt = require('../config/jwt');

const checkTokenMW = async (req, res, next) => {
  try {
    const bearerHeader = req.headers['authorization'];
    const token = bearerHeader && bearerHeader.split(' ')[1];
    req.session.token = token;
    req.myToken = await jwt.verifyToken(req.session.token); // Decoding JWT
    next();
  } catch (err) {
    console.log(`Token_Error:${err}`);
    return res.json('Please provide token');
  }
};

module.exports = checkTokenMW;
