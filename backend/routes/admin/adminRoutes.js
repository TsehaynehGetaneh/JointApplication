const express = require('express');
const adminRouter = express.router();
const {adminCreateCtrl,adminLoginCtrl} = require('../../controllers/admin/adminCtrl')
// create admin
// POST/api/v1/admin
adminRouter.post('/', adminCreateCtrl);
// admin login
// POST/api/v1/admin/login
adminRouter.Post('/login', adminLoginCtrl);


module.exports = adminRouter;

