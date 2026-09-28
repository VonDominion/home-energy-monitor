const Appliance = require('../models/appliance.model');
const Property = require('../models/property.model');

const createAppliance = async (req, res) => {
    try {
        const {
            propertyId,
            name,
            category,
            powerRating,
            quantity
        } = req.body;

        if (
            !propertyId ||
            !name ||
            !category ||
            powerRating === undefined ||
            quantity === undefined
        ) {
            return res.status(400).json({
                message: 'All appliance fields are required'
            });
        }

        // Make sure the property belongs to the logged-in user
        const property = await Property.findOne({
            _id: propertyId,
            userId: req.user.userId
        });

        if (!property) {
            return res.status(404).json({
                message: 'Property not found'
            });
        }

        const appliance = await Appliance.create({
            propertyId,
            name,
            category,
            powerRating,
            quantity
        });

        return res.status(201).json({
            message: 'Appliance created successfully',
            appliance: {
                id: appliance._id,
                propertyId: appliance.propertyId,
                name: appliance.name,
                category: appliance.category,
                powerRating: appliance.powerRating,
                quantity: appliance.quantity,
                isActive: appliance.isActive
            }
        });

    } catch (error) {
        console.error('Create Appliance error:', error.message);

        if (
            error.name === 'ValidationError' ||
            error.name === 'CastError'
        ) {
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
    createAppliance
};