const express = require('express');
const storage = require("../../config/cloudinary");
const applicationRouter = express.Router();
const {applicationCtrl,viewApplicationCtrl} = require('../../controllers/applications/applicationCtrl');
const isLogin = require("../../middlewares/isLogin");
const multer = require("multer");
const upload = multer({ storage });

// Create a new college application
// POST/api/v1/application
applicationRouter.post('/', isLogin, 
upload.array("transcript","Grade_8",
"Grade_12","essay","letter_1","letter_2"), 
 applicationCtrl);
// Get all college applications
// GET/api/v1/application
applicationRouter.get('/', isLogin, viewApplicationCtrl);




module.exports = applicationRouter;