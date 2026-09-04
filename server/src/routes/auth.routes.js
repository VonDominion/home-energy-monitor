// const express = require('express');

// const {
//     signup,
//     login,
//     getMe
// } = require('../controllers/auth.controller');

// const authMiddleware = require('../middleware/auth.middleware');

// const router = express.Router();

// router.post('/signup', signup);
// router.post('/login', login);
// router.get('/me', authMiddleware, getMe);

// module.exports = router;

const express = require('express');
const { signup, login, getMe } = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

<<<<<<< Updated upstream
router.post('/signup', signup);
=======
// Public Auth Routes
router.post('/register', signup); // Maps frontend /api/auth/register calls
router.post('/signup', signup);   // Secondary alias
>>>>>>> Stashed changes
router.post('/login', login);

// Protected User Route
router.get('/me', authMiddleware, getMe);

module.exports = router;