const express = require('express');
const applicationRouter = express.Router();
<<<<<<< Updated upstream
const {applicationCtrl,viewApplicationCtrl} = require('../../controllers/applications/applicationCtrl');
=======
const {applicationCtrl,viewApplictionCtrl} = require('../../controllers/applications/applicationCtrl');
>>>>>>> Stashed changes
const isLogin = require("../../middlewares/isLogin");

// Create a new college application
// POST/api/v1/applications
applicationRouter.post('/', isLogin, applicationCtrl);

// Get all college applications
<<<<<<< Updated upstream
// GET/api/v1/applications 
applicationRouter.get('/', isLogin, viewApplicationCtrl);
=======
// GET/api/v1/applications
applicationRouter.get('/', isLogin, viewApplictionCtrl);
>>>>>>> Stashed changes

module.exports = applicationRouter;