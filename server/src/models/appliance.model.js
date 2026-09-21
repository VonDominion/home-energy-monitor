const mongoose = require('mongoose');

const applianceSchema = new mongoose.Schema(
    {
        propertyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Property',
            required: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        category: {
            type: String,
            required: true,
            enum:[
                'cooling',
                'heating',
                'lighting',
                'kitchen',
                'entertainment',
                'other'
            ]
        },

        powerRating: {
            type: Number,
            required: true,
            min: 1
        },

        quantity: {
            type: Number,
            required: true,
            min: 1,
            validate: {
                validator: Number.isInteger,
                message: "Quantity must be an integer"
            }
        },

        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

const Appliance = mongoose.model('Appliance', applianceSchema);
module.exports = Appliance;