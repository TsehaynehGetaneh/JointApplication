const Application = require('../../model/Application/Application');
const User = require("../../model/User/User");
const { appErr } = require("../../utils/appErr");
const College = require("../../model/University/University")

// Create a new college application 
const applicationCtrl = async (req, res) => {
    try {
      // find  user
      const user = await User.findById(req.userAuth);
      //create applicaton
       
      if(user.userApplication.length == 0)
       {
        const applicationCreated = await Application.create({
          user: user._id,
          ...req.body
        });
        user.userApplication.push(applicationCreated._id);
        user.applicationStatus = "Completed";
        await user.save();
        res.status(201).json(applicationCreated);
       }
      else{
        res.status(200).json({ message: "you have already submitted your application"})
      }
      

    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }

// Get all college applications
  const viewApplicationCtrl = async (req, res) => {
    try {
      const applications = await Application.find({})
          .populate("user")
          .populate("college");
  
      res.status(200).json(applications);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };
module.exports = {
     applicationCtrl,
     viewApplicationCtrl
     }; 