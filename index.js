const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const timeBlockRoutes = require('./routes/timeBlock');

// Initialize the app after requiring necessary modules
const app = express();
const port = 3001;

dotenv.config(); // Load environment variables from .env file

// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes - Move these below the app initialization
app.use('/api/auth', authRoutes);
app.use('/api/timeblocks', timeBlockRoutes);

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the Time Planner API!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
