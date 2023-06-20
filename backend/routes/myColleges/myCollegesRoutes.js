const express = require('express');
const myCollegesRouter = express.Router();
const isLogin = require("../../middlewares/isLogin");
const { getMyCollegesCtrl,addCollegeCtrl } = require('../../controllers/myColleges/myCollegesCtrl');

//get all added colleges in my colleges 
//GET/api/v1/myColleges
myCollegesRouter.get('/',isLogin, getMyCollegesCtrl);
//add colleges from college Search to mycolleges
// post/api/v1/myColleges
myCollegesRouter.post('/',isLogin, addCollegeCtrl);

module.exports = myCollegesRouter;