const assert = require('assert');
const request = require('supertest');

const app = require('../src/app');

const run = async () => {
    const response = await request(app)
        .post('/api/auth/signup')
        .send({
            name: 'Test User',
            email: 'test@example.com'
        })
        .expect(400);

    assert.strictEqual(
        response.body.message,
        'Name, email and password are required'
    );

    console.log('Signup route validation test passed');
};

run().catch((error) => {
    console.error('Signup route test failed');
    console.error(error);
    process.exit(1);
});
