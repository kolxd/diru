const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  profileid: String,
  username: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
