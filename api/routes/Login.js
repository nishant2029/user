const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../model/user");
const router = express.Router();
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "please fill all fields" });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "please register" });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const correctpassword = bcrypt.compare(hash, existingUser.password);
    if (!correctpassword) {
      return res.status(400).json({ message: "enter correct password" });
    }
    const token = jwt.sign({ id: existingUser._id }, 'secretkey', { expiresIn: '1h' });
        res.json({ token, existingUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
router.post("/login", login);
module.exports=router;
