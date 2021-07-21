const express = require('express');
const router = express.Router();
const public = require('../controller/con_public'); // Public Controller

// Get all posts
router.get('/', public.all_post);

// Get one post
router.get('/:id', public.specific_post);

module.exports = router;
