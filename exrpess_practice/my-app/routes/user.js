const express = require('express');
 
const router = express.Router();
 
router.get('/iam', (req, res) => {
    res.send('Hello, User This is user.js');
});
 
module.exports = router;