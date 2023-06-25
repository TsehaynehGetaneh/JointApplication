const express = require('express'); 
const applicationRouter = express.Router();
const {applicationCtrl,viewApplicationCtrl} = require('../../controllers/applications/applicationCtrl');
const isLogin = require("../../middlewares/isLogin");
const storage = require("../../config/cloudinary");
const multer = require("multer");
const upload = multer({ storage });

// Create a new college application
// POST/api/v1/application
// upload.single('transcript'), upload.single('essay'), upload.single('letter1'), upload.single('letter2'), upload.single('grade_8'), upload.single('grade_12')
applicationRouter.post('/', isLogin, upload.single("transcript"), applicationCtrl); 
// Get all college application
// GET/api/v1/application
// applicationRouter.get('/', isLogin, viewApplicationCtrl);

module.exports = applicationRouter;