const express = require('express');
const router = express.Router();
const login = require('../controller/con_login'); // Login Controller

router.get('/', login);
module.exports = router;
