require('dotenv').config();

const mongoose = require('mongoose');
const connectDB = require('../src/config/db');
const Property = require('../src/models/property.model');

const testPropertyModel = async () => {
    try {
        await connectDB();

        const testUserId = new mongoose.Types.ObjectId();


        const property = await Property.create({
            userId: testUserId,
            name: 'Test Home',
            propertyType: '2_BHK'
        });

        console.log("Property created successfully");
        console.log(property);

        if(property.name !== 'Test Home'){
            throw new Error('Property name test failed');
        }

        if(property.propertyType !== '2_BHK'){
            throw new Error('Property Type test failed');
        }

        if(property.userId.toString() !== testUserId.toString()){
            throw new Error('Property UserId test failed');
        }

        console.log('Property model test Passed');

        await Property.deleteOne({
            _id: property._id
        });

        await mongoose.connection.close();

    }catch (error){
        console.error('Property model test failed:', error.message);
        process.exit(1);
    }
};

testPropertyModel();
