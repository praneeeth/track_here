const mongoose = require('mongoose');

const timeBlockSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  category: { type: String, enum: ['Work', 'Exercise', 'Sleep', 'Habit','track food'], required: true },
  notes: { type: String },
});

const TimeBlock = mongoose.model('TimeBlock', timeBlockSchema);
module.exports = TimeBlock;
