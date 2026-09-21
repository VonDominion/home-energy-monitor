const express = require('express');

const {
    createProperty
} = require('../controllers/property.controller');

const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.post(
    '/',
    authMiddleware,
    createProperty
);

module.exports = router;