require('dotenv').config();

const mongoose = require('mongoose');
const connectDB = require('../src/config/db');
const Appliance = require('../src/models/appliance.model');

const testApplianceModel = async () => {
    try{
        await connectDB();

        const testPropertyId =  new mongoose.Types.ObjectId();
        

        const appliance = await Appliance.create({
            propertyId: testPropertyId,
            name: 'Test AC',
            category: 'cooling',
            powerRating: 1500,
            quantity: 1
        });

        console.log('Appliance created successfully');

        if(appliance.name !== 'Test AC'){
            throw new Error('Appliance name test failed');
        }

        if(appliance.category !== 'cooling'){
            throw new Error('Appliance category test failed');
        }

        if(appliance.powerRating !== 1500){
            throw new Error('Appliance powerRating test failed');
        }

        if(appliance.quantity !== 1){
            throw new Error('Appliance quantity test failed');
        }

        if(appliance.isActive !== true){
            throw new Error('Appliance isActive test failed');
        }

        if(
            appliance.propertyId.toString() !== testPropertyId.toString()
        ){
            throw new Error('Appliance propertyId test failed');
        }

        console.log('appliance model test passed');
        console.log(appliance);

        await Appliance.deleteOne({
            _id: appliance._id
        });

        await mongoose.connection.close();


    }catch(error){
        console.error('Appliance model test failed:', error.message);

        process.exit(1);
    }
};

testApplianceModel();