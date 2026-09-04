const express = require('express');

const {
    signup,
    login,
    getMe
} = require('../controllers/auth.controller');

const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

<<<<<<< HEAD
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'Name, email and password are required'
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: 'Email already registered'
            });
        }

        const user = new User({
            name,
            email,
            password
        });

        await user.save();

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Signup error:', error.message);

        res.status(500).json({
            message: 'Internal server error'
        });
    }
});

=======
router.post('/signup', signup);
router.post('/login', login);
router.get('/me', authMiddleware, getMe);

>>>>>>> 3da8cb5a778e71c142abb348e1f2845d50316ec4
module.exports = router;