/**
 * File: server.js
 * Description: Entry point for application where it connect mongdb , and defines base route for apllication
 */
require("dotenv").config();
const express = require("express");
const cors = require('cors');
const authRoutes = require("./src/routes/userRoutes")
const mongoose = require("mongoose");
// Importing route handlers

const app = express();
app.use(cors());
// Setting up the port to listen on 3000 or from .env port
const PORT = process.env.PORT || 3000;
const MongodbURI = "mongodb+srv://sunil:sunil123@cluster0.bryan.mongodb.net/";

mongoose
  .connect(MongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Success fully Connected to MongoDB"))
  .catch((err) => console.error(err));

//parshing JSON requests
app.use(express.json());

//Route handlers with base URLs
app.use("/api/user", authRoutes); 

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});