const UserCollege = require("../../model/MyColleges/MyColleges");
const College = require("../../model/University/University");
const User = require("../../model/User/User");

//get my colleges 
const getMyCollegesCtrl = async (req, res) => {
    try {
      const myColleges = await UserCollege.find({})
                  .populate("user")
                  .populate("college");
       res.status(200).json(myColleges); 

    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } 
  };

  //add colleges to mycolleges
const addCollegeCtrl = async (req, res) => {
    try {
     // find user
      const user = await User.findById(req.userAuth);
       //find college
      const college = req.params._id;
      // Create a new UserCollege document with the current user's ID and the ID of the college being added
      const userCollege = await UserCollege.create({
        user: user._id,
           ...req.body
      });
      userCollege.college.push(college);
      user.myColleges.push(college);
      await userCollege.save();
      await user.save();
      res.status(201).json(userCollege);

    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };

  module.exports = {
    getMyCollegesCtrl,
    addCollegeCtrl 
  }