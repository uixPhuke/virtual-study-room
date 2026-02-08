const mongoose = require('mongoose');
require('dotenv').config();

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: String,
  role: { type: String, enum: ["student", "admin"], default: "student" }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;