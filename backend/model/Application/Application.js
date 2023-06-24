const mongoose = require('mongoose');
// Define the schema for the college application form
const ApplicationSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true
  // },
  // firstName: { type: String, required: true },
  // lastName: { type: String, required: true },
  // email: { type: String, required: true },
  // phone: { type: String, required: true },
  // address: {
  //   street: { type: String },
  //   city: { type: String },
  //   region: { type: String },
  //   zip: { type: String },
  //   country: { type: String }
  // },
  // highSchool: {
  //   name: { type: String, required: true },
  //   city: { type: String, required: true },
  //   region: { type: String, required: true },
  //   graduationYear: { type: Number, required: true }
  // },
  transcript:  { type: String, required: false },
  // national_exam: {
  //   Grade_8: { type: String, required: true },
  //   Grade_12: { type: String, required: true }
  // },
  // essay: {
  //   essay: { type: String },
  //   text: String,
  // },
  recommendations: { type: String, required: false },
   // URL of the second uploaded recommendation letter
  
  
});

  // ApplicationSchema.path('essay').validate(function(value) {
  //   return value.essay || value.text;
  // }, 'Either essay or text must be provided');
  
// Define the model for the college application form
const Application = mongoose.model('Application', ApplicationSchema);


  
  module.exports = Application;