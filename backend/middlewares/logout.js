const express = require('express');
const logoutRouter = express.Router();

const logout = (req, res, next) => {
  try {
    // Clear the authentication token cookie
    res.status(200).clearCookie('token'); 

  } catch (err) {
    // Handle any errors that occur
    console.error(err);
    res.status(500).send('An error occurred while logging out');
  }
};

logoutRouter.post('/logout', logout);

module.exports = logoutRouter;