require('dotenv').config();

const mongoose = require('mongoose');
const connectDB = require('../src/config/db');
const Reading = require('../src/models/reading.model');

const testReadingModel = async () => {
    try {
        await connectDB();

        const testPropertyId = new mongoose.Types.ObjectId();
        const testApplianceId = new mongoose.Types.ObjectId();

        const reading = await Reading.create({
            propertyId: testPropertyId,
            applianceId: testApplianceId,
            powerConsumption: 1500,
            durationMinutes: 60,
            energyConsumed: 1.5
        });

        console.log('Reading created successfully');
        console.log(reading);

        if (reading.propertyId.toString() !== testPropertyId.toString()) {
            throw new Error('Reading propertyId test failed');
        }

        if (reading.applianceId.toString() !== testApplianceId.toString()) {
            throw new Error('Reading applianceId test failed');
        }

        if (reading.powerConsumption !== 1500) {
            throw new Error('Reading power consumption test failed');
        }

        if (reading.durationMinutes !== 60) {
            throw new Error('Reading duration test failed');
        }

        if (reading.energyConsumed !== 1.5) {
            throw new Error('Reading energy consumed test failed');
        }

        console.log('Reading model test passed');

        await Reading.deleteOne({
            _id: reading._id
        });

        await mongoose.connection.close();

    } catch (error) {
        console.error('Reading model test failed:', error.message);
        process.exit(1);
    }
};

testReadingModel();