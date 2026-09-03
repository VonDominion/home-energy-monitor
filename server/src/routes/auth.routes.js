const express = require('express');

const router = express.Router();

router.post('/signup', (req, res) => {
    res.status(201).json({
        message: 'Signup route working'
    });
});

module.exports = router;