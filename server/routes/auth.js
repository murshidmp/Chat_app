const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require ("jsonwebtoken")
const userSchema = require("../models/User");

// Define authentication routes here
router.post("/register", async (req, res) => {
  const password = req.body.password;
  const hash = await bcrypt.hash(password, saltRounds);
  console.log(hash);
  const user = new userSchema({
    fullName: req.body.fullName,
    username: req.body.userName,
    hash: hash,
  });
  user.save()
  const token = jwt.sign({userId:user._id.toString()},"mysecret",{ expiresIn: "1h" })
  
  res.json({ success: "true" , token});

 
});

module.exports = router;