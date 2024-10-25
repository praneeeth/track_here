const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// registering a new user
router.post('/register', async (req, res) => {    // "/register" is used for registering the user from the request body  post method
    const { email, password, name } = req.body;
    try {
      const user = new User({ email, password, name });
      await user.save();
      res.status(201).send('User registered');
    } catch (err) {
      res.status(400).send('Error: ' + err.message);
    }
  });

// login for existing user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).send('User not found');
      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).send('Invalid credentials');
      
      const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
      res.json({ token });
    } catch (err) {
      res.status(500).send('Server error');
    }
  });
  module.exports = router;  //this is to export the router so that it can be used in our main application file (index.js).
