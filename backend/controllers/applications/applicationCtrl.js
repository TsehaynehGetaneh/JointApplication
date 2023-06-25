const Application = require('../../model/Application/Application');
const User = require("../../model/User/User");
const storage = require("../../config/cloudinary");
const multer = require("multer");
const upload = multer({ storage }); 

// Create a new college application  
const applicationCtrl = async (req, res, next) => {
  try {
    const user = await User.findById(req.userAuth);
    if (user.userApplication.length > 0) {
      res.status(200).json({ message: "you have already submitted your application"})
      return; 
    }
    // if (!req.files || !req.files.transcript) {
    //   res.status(400).json({ message: 'Transcript file is missing' });
    //   return;  
    // }

    //Upload files to Cloudinary and obtain their URLs
    // const transcriptUrl = await upload(req.file.transcript.path).then(result => result.url);
    // const essayUrl = await upload(req.file.essay.path).then(result => result.url);
    // const letter1Url = await upload(req.file.letter1.path).then(result => result.url);
    // const letter2Url = await upload(req.file.letter2.path).then(result => result.url);
    // const grade_8Url = await upload(req.file.grade_8.path).then(result => result.url);
    // const grade_12Url = await upload(req.file.grade_12.path).then(result => result.url);
    
    // Create a new Application document with the form data and file URLs
    const application = new Application({
      user: user._id,
      // firstName: req.body.firstName,
      // lastName: req.body.lastName,
      // email: req.body.email,
      // phone: req.body.phone,
      // address: {
      //   street: req.body.street,
      //   city: req.body.city,
      //   region: req.body.region,
      //   zip: req.body.zip,
      //   country: req.body.country
      // },
      // highSchool: {
      //   name: req.body.highSchoolName,
      //   city: req.body.highSchoolCity,
      //   region: req.body.highSchoolRegion,
      //   graduationYear: req.body.graduationYear
      // },
      transcript: req.file.path,
      //  national_exam: {
      //    Grade_8: req.file.path,  
      //    Grade_12: grade_12Url
      // },
      // essay: {
      //   essay: req.file.path,
      //   text: req.body.essayText
      // },
      // recommendations: {
      //   letter1Url: letter1Url,
      //   letter2Url: letter2Url
      // },
      
    });

    // Save the new Application document to the database
    await application.save();
    user.userApplication.push(application._id);
    user.applicationStatus = "Completed";
    await user.save();
    res.status(201).json(application);
  } catch (error) {
    console.log(error);
   next( res.status(500).json({ message: 'Server error' }))
  }
};

module.exports = {
  applicationCtrl,
  // viewApplicationCtrl
};