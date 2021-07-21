const express = require('express');
const router = express.Router();
const logout = require('../controller/con_logout'); //Logout Controller

router.get('/', logout);

module.exports = router;
