require('dotenv').config();

const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app = require('../src/app');
const connectDB = require('../src/config/db');

const User = require('../src/models/user.model');
const Property = require('../src/models/property.model');
const Appliance = require('../src/models/appliance.model');
const Reading = require('../src/models/reading.model');

const run = async () => {
    try {
        await connectDB();

        // ---------------------------------------
        // 1. Create test user
        // ---------------------------------------

        const email = 'reading-api-test@example.com';

        await User.deleteOne({ email });

        const user = await User.create({
            name: 'Reading API User',
            email,
            password: 'password123'
        });

        // Login to get JWT
        const loginResponse = await request(app)
            .post('/api/auth/login')
            .send({
                email,
                password: 'password123'
            });

        assert.strictEqual(loginResponse.status, 200);
        assert(loginResponse.body.token);

        const token = loginResponse.body.token;

        console.log('User login successful');


        // ---------------------------------------
        // 2. Create property
        // ---------------------------------------

        const propertyResponse = await request(app)
            .post('/api/properties')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'Reading Test Home',
                propertyType: '2_BHK'
            });

        assert.strictEqual(propertyResponse.status, 201);

        assert(propertyResponse.body.property);

        const propertyId = propertyResponse.body.property.id;

        console.log('Property created successfully');


        // ---------------------------------------
        // 3. Create appliance
        // ---------------------------------------

        const applianceResponse = await request(app)
            .post('/api/appliances')
            .set('Authorization', `Bearer ${token}`)
            .send({
                propertyId,
                name: 'Test AC',
                category: 'cooling',
                powerRating: 1500,
                quantity: 1
            });

        assert.strictEqual(applianceResponse.status, 201);

        assert(applianceResponse.body.appliance);

        const applianceId = applianceResponse.body.appliance.id;

        console.log('Appliance created successfully');


        // ---------------------------------------
        // 4. Create reading
        // ---------------------------------------

        const readingResponse = await request(app)
            .post('/api/readings')
            .set('Authorization', `Bearer ${token}`)
            .send({
                propertyId,
                applianceId,
                powerConsumption: 1500,
                durationMinutes: 60,
                energyConsumed: 1.5
            });

        assert.strictEqual(readingResponse.status, 201);

        assert.strictEqual(
            readingResponse.body.message,
            'Reading created successfully'
        );

        assert(readingResponse.body.reading);

        assert.strictEqual(
            readingResponse.body.reading.propertyId.toString(),
            propertyId.toString()
        );

        assert.strictEqual(
            readingResponse.body.reading.applianceId.toString(),
            applianceId.toString()
        );

        assert.strictEqual(
            readingResponse.body.reading.powerConsumption,
            1500
        );

        assert.strictEqual(
            readingResponse.body.reading.durationMinutes,
            60
        );

        assert.strictEqual(
            readingResponse.body.reading.energyConsumed,
            1.5
        );

        console.log('Reading API test passed');


        // ---------------------------------------
        // 5. Cleanup
        // ---------------------------------------

        await Reading.deleteMany({
            propertyId
        });

        await Appliance.deleteMany({
            propertyId
        });

        await Property.deleteOne({
            _id: propertyId
        });

        await User.deleteOne({
            _id: user._id
        });

        await mongoose.connection.close();

        console.log('Reading API test cleanup completed');

    } catch (error) {
        console.error('Reading API test failed:', error.message);
        process.exit(1);
    }
};

run();