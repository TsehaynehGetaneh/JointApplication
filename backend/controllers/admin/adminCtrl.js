const Admin = require("../../Admin/Admin");

// create admin
const adminCreateCtrl = async (req, res, next) => {
    const {  username, password } = req.body;
    try {
      //Check if username exist
      const userFound = await Admin.findOne({ username });
      if (userFound) {
        return next(new AppErr("User Already Exist", 500));
      }
      //hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      //create the user
      const user = await User.create({
        username,
        password: hashedPassword,
      });
      res.json({
        status: "success",
        data: user,
      });
    } catch (error) {
      next(appErr(error.message));
    }
  };
//admin login
const adminLoginCtrl = async (req, res, next) => {
    const { username, password } = req.body;
    try {
      //Check if username exist
      const userFound = await Admin.findOne({ username });
      if (!userFound) {
        return next(appErr("username not Found"));
      }
      //verify password
      const isPasswordMatched = await bcrypt.compare(
        password,
        userFound.password
      );
   
      if (isPasswordMatched) {
        // Password is correct, return success and data
        res.json({
          status: "success",
          data: {
            username: userFound.username,
            email: userFound.email,
            isAdmin: userFound.isAdmin,
            token: generateToken(userFound._id),
          },
        });
      } else {
        // Password is incorrect, return error
        return next(appErr("Invalid login credentials"));
      }
    } catch (error) {
      next(appErr(error.message));
    }
  };

  module.exports = { adminLoginCtrl, adminCreateCtrl };