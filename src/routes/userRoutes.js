/**
 * File: userRoutes.js
 * Description: handle the certain routes request correctly and passing the request to the controller
 */
const express = require("express");
const router = express.Router();
const { validateUser } = require("../middleware/middleware");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controller/userController");

//registering routes here

//register route with validateUser middleware to valide data before sending to the registerUser middleware
router.post("/register", validateUser, registerUser);

//login route
router.post("/login", loginUser);



module.exports = router; //exporting router