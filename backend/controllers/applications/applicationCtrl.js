// const express = require("express");
const Application = require('../../model/Application/Application');
const User = require("../../model/User/User");

// const app = express();
// app.use(express.urlencoded({ extended: true }));

// Create a new college application  
const applicationCtrl = async (req, res) => { 
  try {

    const user = await User.findById(req.userAuth);
    if (user.userApplication.length > 0) {
      res.status(200).json({ message: "you have already submitted your application"})
      return; 
    }
    // const {firstName, lastName, email, phone} = req.body;
   // read url of uploded files
    const transcriptUrl = req.files['transcript'][0].path; 
    const grade8Url = req.files['Grade_8'][0].path;
    const grade12Url = req.files['Grade_12'][0].path;
    const essayUrl = req.files['essay'][0].path;
    const recommendationUrl = req.files['recommendation'][0].path;
    
    // Create a new Application document with the form data and file URLs
    const application =  new Application({
      user:user._id,
      firstName: req.body.firstName,
      lastName:  req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      // address: {
      //   street,
      //   city,
      //   region,
      //   zip,
      //   country
      // },
      // highSchool: {
      //   name: name,
      //   city: cityName,
      //   region: regionName,
      //   graduationYear
      //},
      transcript: transcriptUrl, 
      national_exam: {
        Grade_8: grade8Url,  
        Grade_12: grade12Url
      },
      essay: {
        essay: essayUrl,
        // text: req.body.essayText
      },
      recommendation: recommendationUrl
      
    });

    // Save the new Application document to the database
    await application.save();
    user.userApplication.push(application._id);
    user.applicationStatus = "Completed";
    await user.save();
    res.status(201).json(application);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' })
  }
};

module.exports = {
  applicationCtrl, 
  // viewApplicationCtrl
};