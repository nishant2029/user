const express = require('express');
const router = express.Router();
const User = require('../model/user');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get user details based on the token
router.get('/user', authMiddleware, async (req, res) => {
    try {
        // Find the user by ID (req.user contains the user ID from the token)
        const user = await User.findById(req.user).select('-password'); // Exclude password from the result
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json({ user }); // Send the user data to the client
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
