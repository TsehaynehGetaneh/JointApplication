const express = require('express');
const myCollegesRouter = express.Router();
const isLogin = require("../../middlewares/isLogin");
const { getMyCollegesCtrl,addCollegeCtrl,removeCollegeCtrl } = require('../../controllers/myColleges/myCollegesCtrl');
 
//get all added colleges in my colleges 
//GET/api/v1/myColleges
myCollegesRouter.get('/getColleges',isLogin, getMyCollegesCtrl);
//add colleges from college Search to mycolleges
// post/api/v1/myColleges
myCollegesRouter.post('/addColleges/:id',isLogin, addCollegeCtrl);
//delete colleges from myCollege
//Delete/api/v1/removeCollege
myCollegesRouter.delete('/removeCollege/:id', isLogin, removeCollegeCtrl);
 
module.exports = myCollegesRouter;