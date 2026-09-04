const express = require('express');
const cors = require('cors');

const healthRoutes = require('./routes/health.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

app.use('/api', healthRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;