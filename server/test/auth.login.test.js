const assert = require('assert');
const request = require('supertest');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

require('dotenv').config();

const app = require('../src/app');
const connectDB = require('../src/config/db');
const User = require('../src/models/user.model');

const run = async () => {
    const email = 'login-test@example.com';
    const password = 'password123';

    try {
        await connectDB();

        // Remove old test user if it already exists
        await User.deleteOne({ email });

        // Create test user
        const user = await new User({
            name: 'Test User',
            email,
            password
        }).save();

        // Send login request
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                email,
                password
            });

        // Check response status
        assert.strictEqual(response.status, 200);

        // Check token exists
        assert(response.body.token);

        // Verify JWT
        const decodedToken = jwt.verify(
            response.body.token,
            process.env.JWT_SECRET
        );

        assert.strictEqual(
            decodedToken.userId,
            response.body.user.id
        );

        // Check response message
        assert.strictEqual(
            response.body.message,
            'Login successful'
        );

        // Check user data
        assert(response.body.user);
        assert(response.body.user.id);

        assert.strictEqual(
            response.body.user.email,
            email
        );

        console.log('Login test passed');

    } finally {
        // Remove test user
        await User.deleteOne({ email });

        // Close MongoDB connection
        await mongoose.disconnect();
    }
};

run().catch((error) => {
    console.error('Login test failed');
    console.error(error);
    process.exit(1);
});