const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  reading: {
    type: Boolean,
    required: true
  },
  movies: {
    type:Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("users", UserSchema);