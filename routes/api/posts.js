const express = require('express');
const router = express.Router();

//@route   GET request to api/posts/test
//@desc    Tests posts route
//@access  Public route
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));

module.exports = router;
