const express = require('express');
const router = express.Router();
const auth = require('../controller/con_auth'); // Auth Controller

// Create Both User and Post
router.post('/', auth.new_post);

// Update Post
router.put('/:id', auth.update_post);

// Delete Post
router.delete('/:id', auth.delete_post);

module.exports = router;
