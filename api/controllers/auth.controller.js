import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';



export const signup = async (req, res,next) => {
    try {
      const { username, email, password } = req.body;
  
     const hashedPassword =  bcryptjs.hashSync(password,10);


      // Check if required fields are provided
      if (!username || !email || !password) {
        return res.status(400).json({ message: "Username, email, and password are required." });
      }
  
      // Create a new user instance
      const newUser = new User({ username, email, password:hashedPassword });
  
      // Save the new user
      await newUser.save();
  
      // Respond with success message
      return res.status(201).json('User created successfully');
    } catch (error) {
      next(error);
    }
  };
  