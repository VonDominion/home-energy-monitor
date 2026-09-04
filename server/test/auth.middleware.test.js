const assert = require('assert');
const request = require('supertest');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = require('../src/app');
const connectDB = require('../src/config/db');
const User = require('../src/models/user.model');

const run = async () => {

    await connectDB();

    const user = await User.findOne({
        email: 'naitikcontroller@example.com'
    });

    assert(user);

    const token = jwt.sign(
        {
            userId: user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1d'
        }
    );

    // Test 1: valid token
    const response = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${token}`);

    assert.strictEqual(response.status, 200);

    assert(response.body.user);

assert.strictEqual(
    response.body.user.id,
    user._id.toString()
);

assert.strictEqual(
    response.body.user.email,
    user.email
);

    console.log('Valid token test passed');

    // Test 2: no token
    const noTokenResponse = await request(app)
        .get('/api/auth/me');

    assert.strictEqual(noTokenResponse.status, 401);

    assert.strictEqual(
        noTokenResponse.body.message,
        'Authentication required'
    );

    console.log('No token test passed');

    // Test 3: invalid token
const invalidTokenResponse = await request(app)
    .get('/api/auth/me')
    .set('Authorization', 'Bearer invalid-token');

assert.strictEqual(invalidTokenResponse.status, 401);

assert.strictEqual(
    invalidTokenResponse.body.message,
    'Invalid or expired token'
);

console.log('Invalid token test passed');
};

run().catch((error) => {
    console.error('Auth middleware test failed');
    console.error(error);
    process.exit(1);
});