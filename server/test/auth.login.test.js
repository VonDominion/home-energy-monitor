const assert = require('assert');
const request = require('supertest');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = require('../src/app');
const connectDB = require('../src/config/db');

const run = async () => {

    await connectDB();

    const response = await request(app)
        .post('/api/auth/login')
        .send({
            email: 'naitikcontroller@example.com',
            password: 'password123'
        });

    assert.strictEqual(response.status, 200);

    assert(response.body.token);

const decodedToken = jwt.verify(
    response.body.token,
    process.env.JWT_SECRET
);

assert.strictEqual(
    decodedToken.userId,
    response.body.user.id
);

    assert.strictEqual(
        response.body.message,
        'Login successful'
    );

    assert(response.body.user);
    assert(response.body.user.id);
    assert.strictEqual(
        response.body.user.email,
        'naitikcontroller@example.com'
    );

    console.log('Login test passed');
};

run().catch((error) => {
    console.error('Login test failed');
    console.error(error);
    process.exit(1);
});