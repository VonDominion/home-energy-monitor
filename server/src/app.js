const express = require('express');
const cors = require('cors');

const healthRoutes = require('./routes/health.routes');
const authRoutes = require('./routes/auth.routes');
const propertyRoutes = require('./routes/property.routes');

const app = express();

const corsOrigin =
    process.env.CORS_ORIGIN || 'http://localhost:5173';

app.use(cors({
    origin: corsOrigin
}));

app.use(express.json());

app.use('/api', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);

module.exports = app;