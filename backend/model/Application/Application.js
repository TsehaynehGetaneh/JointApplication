const mongoose = require('mongoose');
// Define the schema for the college application form
const ApplicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true
  },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  address: {
    street: { type: String },
    city: { type: String },
    region: { type: String },
    zip: { type: String },
    country: { type: String }
  },
  highSchool: {
    name: { type: String, required: false },
    cityName: { type: String, required: false },
    regionName: { type: String, required: false },
    graduationYear: { type: Number, required: false }
  }, 
  transcript:  { type: String, required: false },
  Grade_8: { type: String, required: false },
  Grade_12: { type: String, required: false },
  essay: { type: String, required: false },
  recommendation: { type: String, required: false }
});
  
// Define the model for the college application form
const Application = mongoose.model('Application', ApplicationSchema);


  
  module.exports = Application;