// routes/timeBlocks.js

const express = require('express');
const router = express.Router();

// Route to get all time blocks
router.get('/', (req, res) => {
  res.json({ message: 'Get all time blocks' });
});

// Route to create a new time block
router.post('/', (req, res) => {
  const { startTime, endTime, activityType } = req.body;
  // Logic for creating a time block (mock response for now)
  res.json({ message: 'Time block created', data: { startTime, endTime, activityType } });
});

// Export the router
module.exports = router;
