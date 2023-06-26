const express = require('express');  
const applicationRouter = express.Router();
const {applicationCtrl,viewApplicationCtrl} = require('../../controllers/applications/applicationCtrl');
const isLogin = require("../../middlewares/isLogin");
const storage = require("../../config/cloudinary");
const multer = require("multer");
const upload = multer({ storage });
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended:true }));
// Create a new college application
// POST/api/v1/application 

applicationRouter.post('/', isLogin, applicationCtrl); 
// Get all college application
// GET/api/v1/application
applicationRouter.get('/', isLogin, viewApplicationCtrl);

module.exports = applicationRouter;