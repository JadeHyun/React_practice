const express = require('express');
 
const router = express.Router();
 
router.get('/in', (req, res) => {
    res.send('Hello, World ! This is Routes');
});
 
module.exports = router;