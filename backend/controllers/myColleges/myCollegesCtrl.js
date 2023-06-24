const User = require("../../model/User/User");
const { usersCtrl } = require("../users/userCtrl");

 //add colleges to mycolleges
 const addCollegeCtrl = async (req, res) => {
  try {
   // find user
    const user = await User.findById(req.userAuth);
     //find college
    const college = req.params.id;
    // Create a new UserCollege document with the current user's ID and the ID of the college being added
  if(user.myCollege.includes(college))
  {
    res.status(200).json({ message: 'College already exists in  your College list' });
  }
  else{ 
    user.myCollege.push(college);
    await user.save();
    res.status(201).json(user.myCollege);
  }
 } 
  catch (err) {
    res.status(500).send('Internal Server Error');
  }
}; 
 
//get my colleges 
const getMyCollegesCtrl = async (req, res) => {
    try {
      
      const user = await User.findById(req.userAuth).populate('myCollege');      
       res.status(200).json(user.myCollege); 

    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } 
  };

  // remove colleges from myColleges

const removeCollegeCtrl = async (req, res) => {
    try {
        
        const userId = await User.findById(req.userAuth);
        const collegeId = req.params.id;

      // Use $pull operator to remove the collegeId from myCollege array
      const user = await User.findByIdAndUpdate(userId, { $pull: { myCollege: collegeId } }, { new: true });
      await user.save();
      res.json(user.myCollege);
      
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
 
  module.exports = {
    getMyCollegesCtrl,
    addCollegeCtrl,
    removeCollegeCtrl
  }