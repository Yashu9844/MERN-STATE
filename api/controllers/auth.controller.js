import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Check if required fields are provided
      if (!username || !email || !password) {
        return res.status(400).json({ message: "Username, email, and password are required." });
      }
  
      // Create a new user instance
      const newUser = new User({ username, email, password });
  
      // Save the new user
      await newUser.save();
  
      // Respond with success message
      return res.status(201).json('User created successfully');
    } catch (error) {
      // Handle any errors
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  