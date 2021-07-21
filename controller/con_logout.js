const lognout = async (req, res) => {
  req.session.destroy(); // Destroying session (**provided  JWT is still usable**)
  res.json('logout');
};

module.exports = lognout;
