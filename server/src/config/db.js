const mongoose = require('mongoose');
const dns = require('dns');

// Force Node.js to use Google Public DNS for SRV resolution
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error){
        console.error('MongoDb connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;