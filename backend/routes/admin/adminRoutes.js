const express = require('express');
const adminRouter = express.Router();
const { adminCreateCtrl, adminLoginCtrl } = require('../../controllers/admin/adminCtrl')
//create admin
// POST/api/v1/admin
adminRouter.post('/create', adminCreateCtrl);
// admin login
// POST/api/v1/admin/login
adminRouter.post('/login', adminLoginCtrl);


module.exports = adminRouter;

