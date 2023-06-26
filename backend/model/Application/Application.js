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
  address: {
    street: { type: String },
    city: { type: String },
    region: { type: String },
    zip: { type: String },
    country: { type: String }
  },
  highSchool: {
    name: { type: String, required: true},
    cityName: { type: String, required: true},
    regionName: { type: String, required: true},
    graduationYear: { type: Number, required: true}
  }, 
  //grade 8 national exam id 
  Grade_8:{type: String, required: true},
  //grade 12 university entrance exame id
  Grade_12: {type: String, required: true},
  essay: { type: String, required: true },
});
  
// Define the model for the college application form
const Application = mongoose.model('Application', ApplicationSchema);


  
  module.exports = Application;