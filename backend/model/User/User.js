const mongoose = require("mongoose");
const Post = require("../Post/Post");

//create schema
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastname: {
      type: String,
      required: [true, "Last Name is required"],
    },
   
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    myCollege:[
      {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "University"
    },
  ]
  });

//Compile the user model
const User = mongoose.model("User", userSchema);

module.exports = User;
