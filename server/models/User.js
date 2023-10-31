// server/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define your user schema here
});

module.exports = mongoose.model('User', userSchema);
add