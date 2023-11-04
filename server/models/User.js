// server/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define your user schema here
  fullName: String,
  username: String,
  hash: String,
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
