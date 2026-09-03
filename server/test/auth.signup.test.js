const assert = require('assert');
const request = require('supertest');

const app = require('../src/app');

request(app)
    .post('/api/auth/signup')
    .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
    })
    .expect(201)
    .then(response => {

        assert.strictEqual(
            response.body.message,
            'Signup route working'
        );

        console.log('Signup route test passed');

    })
    .catch(error => {

        console.error('Signup route test failed');
        console.error(error);

        process.exit(1);
    });