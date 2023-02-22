const express = require('express');

const router = express.Router();

// Middleware function to validate request data against Joi schema
const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
};

// Joi schema for validating user registration data

// Dynamic validation middleware for user registration data

// Route to register a new user
router.post('/signup', validate, async (_req, res) => {
  try {
    // User registration logic here
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Joi schema for validating user login data

// Dynamic validation middleware for user login data
const validateLoginData = validate();

// Route to log in a user
router.post('/login', validateLoginData, async (_req, res) => {
  try {
    // User login logic here
    res.status(200).json({ message: 'User logged in successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
