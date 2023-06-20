const mongoose = require('mongoose');

const userCollegeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

});

const UserCollege = mongoose.model('UserCollege', userCollegeSchema);

module.exports = UserCollege;