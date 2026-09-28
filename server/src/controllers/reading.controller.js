const Reading = require('../models/reading.model');
const Property = require('../models/property.model');
const Appliance = require('../models/appliance.model');

const createReading = async (req, res) => {
    try {
        const {
            propertyId,
            applianceId,
            powerConsumption,
            durationMinutes,
            energyConsumed,
            recordedAt
        } = req.body;

        if (
            !propertyId ||
            !applianceId ||
            powerConsumption === undefined ||
            durationMinutes === undefined ||
            energyConsumed === undefined
        ) {
            return res.status(400).json({
                message: 'All reading fields are required'
            });
        }

        const property = await Property.findOne({
            _id: propertyId,
            userId: req.user.userId
        });

        if (!property) {
            return res.status(404).json({
                message: 'Property not found'
            });
        }

        const appliance = await Appliance.findOne({
            _id: applianceId,
            propertyId
        });

        if (!appliance) {
            return res.status(404).json({
                message: 'Appliance not found'
            });
        }

        const reading = await Reading.create({
            propertyId,
            applianceId,
            powerConsumption,
            durationMinutes,
            energyConsumed,
            recordedAt
        });

        return res.status(201).json({
            message: 'Reading created successfully',
            reading: {
                id: reading._id,
                propertyId: reading.propertyId,
                applianceId: reading.applianceId,
                powerConsumption: reading.powerConsumption,
                durationMinutes: reading.durationMinutes,
                energyConsumed: reading.energyConsumed,
                recordedAt: reading.recordedAt
            }
        });

    } catch (error) {
        console.error('Create Reading error:', error.message);

        if (error.name === 'ValidationError' || error.name === 'CastError') {
            return res.status(400).json({
                message: error.message
            });
        }

        return res.status(500).json({
            message: 'Internal server error'
        });
    }
};

module.exports = {
    createReading
};