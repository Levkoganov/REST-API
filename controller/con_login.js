const jwt = require('../config/jwt');

const login = async (req, res) => {
  try {
    // Hardcode Username and Password in params. (example:?username=test&password=123)
    const { username, password } = req.query;
    const user = {
      username,
      password,
    };

    // Check if username and password provided
    if (!user.username || !user.password) {
      console.log('provide Username and Password in the URL');
      res.json('provide Username and Password in the URL');
    } else {
      req.session.token = await jwt.generateToken(user); // Storing JWT in a Session
      console.log(`Token:${req.session.token}`);
      res.json({ data: req.session.token, user: user });
    }
  } catch (err) {
    console.log(`login error:${err}`);
  }
};

module.exports = login;
