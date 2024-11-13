const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const sentimentRoutes = require('./routes/sentiment');

require('dotenv').config();
const app = express();

connectDB();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/sentiment', sentimentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
