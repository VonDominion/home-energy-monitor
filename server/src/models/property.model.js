const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        propertyType: {
            type: String,
            required: true,
            enum: [
                '1_BHK',
                '2_BHK',
                '3_BHK',
                '4_BHK',
                '5_BHK',
                'HOTEL',
                'RESORT',
                'HOSTEL',
                'OFFICE',
                'OTHER'
            ]
        }
    },

    {
        timestamps: true
    }
);

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;