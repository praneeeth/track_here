// app.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3100;

// Importing the routes
const timeBlocksRouter = require('./routes/timeBlock');

// Middleware to parse JSON requests
app.use(express.json());

// Use the routes
app.use('/api/time-blocks', timeBlocksRouter);

// Basic route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Time Planner App');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
