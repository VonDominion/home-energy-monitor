const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema({

    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: true
    },

    applianceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appliance',
        required: true
    },

    powerConsumption: {
        type: Number,
        required: true,
        min: 0
    },

    durationMinutes: {
        type: Number,
        required: true,
        min: 0
    },

    energyConsumed: {
        type: Number,
        required: true,
        min: 0
    },

    recordedAt: {
        type: Date,
        required: true,
        default: Date.now
    }

  },

  {
        timestamps: true
    }
);

const Reading = mongoose.model('Reading', readingSchema);

module.exports = Reading;
