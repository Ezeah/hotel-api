const express = require('express');
const Authenticate = require("../middlewares/adminauth");

const router = express.Router();

// Route to create a new room type
router.post('/room-types', Authenticate.admin, async (req, res) => {
  // Only admins can access this route
  try {
    // Add new room type logic here
    res.status(201).json({ message: 'Room type created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to update an existing room type
router.put('/room-types/:id', Authenticate.admin, async (req, res) => {
  // Only admins can access this route
  try {
    // Update room type logic here
    res.status(200).json({ message: 'Room type updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to delete an existing room type
router.delete('/room-types/:id', Authenticate.admin, async (req, res) => {
  // Only admins can access this route
  try {
    // Delete room type logic here
    res.status(200).json({ message: 'Room type deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;