const express = require('express');

const router = express.Router();

router.get('/health', (req, res)=> {
    res.json({
        status: 'Home',
        message: 'Home Energy Monitor API is Running'
    });
});

module.exports = router;