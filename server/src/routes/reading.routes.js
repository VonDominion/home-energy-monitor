const express = require('express');

const {
    createReading
} = require('../controllers/reading.controller');

const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.post(
    '/',
    authMiddleware,
    createReading
);

module.exports = router;
