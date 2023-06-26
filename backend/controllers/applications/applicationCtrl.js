const Application = require('../../model/Application/Application');
const User = require("../../model/User/User");
const multer = require("multer");

// Create a new college application  
const applicationCtrl = async (req, res) => {  
  try {

    const user = await User.findById(req.userAuth);
    if (user.userApplication.length > 0) {
      res.status(200).json({ message: "you have already submitted your application"})
      return; 
    }
 
    // Create a new Application document with the form data and file URLs
    const application =  new Application({
      user: user._id,
      ...req.body,
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
// get all applications
const viewApplicationCtrl = async (req, res) => {  
try {
  const application = await Application.find()
    .populate('user', '-password')
    .exec();

  if (!application) {
    // handle case where application with the given ID doesn't exist
    res.status(404).json({ error: 'Application not found' });
    return;
  }

  // return the application with the populated user field
  res.json(application);
  return;
} catch (err) {
  // handle error
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });

}
};
module.exports = {
  applicationCtrl, 
 viewApplicationCtrl
};