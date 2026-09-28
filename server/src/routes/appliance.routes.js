const express = require('express');

const {
    createAppliance
} = require('../controllers/appliance.controller');

const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.post(
    '/',
    authMiddleware,
    createAppliance
);

module.exports = router;