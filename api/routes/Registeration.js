const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../model/user');
const router = express.Router();
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { name, email, password, address } = req.body;
    try {
        
        if (!name || !email || !password || !address) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

     
        const newUser = new User({
            name,
            email,
            password:hash,
            address
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
        console.log(savedUser);

    } catch (error) {
        console.error('Error during registration:', error);  
        res.status(500).json({ message: 'Server error' });
    }
};

router.post("/register", register);

module.exports = router;
