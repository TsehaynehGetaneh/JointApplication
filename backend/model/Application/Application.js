const mongoose = require('mongoose');
// Define the schema for the college application form
const ApplicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  // address: {
  //   street: { type: String },
  //   city: { type: String },
  //   region: { type: String },
  //   zip: { type: String },
  //   country: { type: String }
  // },
  // highSchool: {
  //   name: { type: String, required: false},
  //   cityName: { type: String, required: false},
  //   regionName: { type: String, required: false},
  //   graduationYear: { type: Number, required: false}
  // },
  // transcript:  { type: String, required: true },
  // national_exam: {
  //   Grade_8: { type: String, required: true },
  //   Grade_12: { type: String, required: true }
  // },
  // essay: {
  //   essay: { type: String, reqired: true },
  //   text: String,
  // },
  // recommendation: { type: String, required: false },
   
});
  
// Define the model for the college application form
const Application = mongoose.model('Application', ApplicationSchema);


  
  module.exports = Application;