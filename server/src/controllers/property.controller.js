const Property = require('../models/property.model');

const createProperty = async (req, res) => {
    try {
        const {name, propertyType } = req.body;

        if(!name || !propertyType) {
            return res.status(400).json({
                message: 'Property name and property type are required'
            });
        }

        const property = await Property.create({
            userId: req.user.userId,
            name,
            propertyType
        });

        return res.status(201).json({
            message: 'Property created successfully',
            property: {
                id: property._id,
                name: property.name,
                propertyType: property.propertyType
            }
        });
    } catch(error) {
        console.error('Create Property error:', error.message);
        
        if (error.name === 'ValidationError'){
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
    createProperty
};