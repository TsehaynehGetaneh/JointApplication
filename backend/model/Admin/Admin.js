const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    username: {type: 'string', required: true},
    password: {type: 'string', required: true},
    isAdmin: {type: 'boolean', default: true}
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;