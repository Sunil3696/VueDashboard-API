/**
 * File: middleware.js
 * Description: Handle anything just before the execution of controller function to validate certain things before processing requests
 */


  /**User validation middleware
   * Check if all the required data is recived or not and also check password length
   **/
  const validateUser = (req, res, next) => {
    const { email, username, password } = req.body;
  
    if (!email || !username || !password) {
      res.status(400).send("All fields are required");
      return;
    }
    if (password.length < 6) {
      res.status(400).send("Password must be at least 6 chars long");
      return;
    }
    next();
  };
  
  module.exports = { validateUser };