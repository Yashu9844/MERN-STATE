import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'


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
  

  export const signin = async (req,res,next)=>{
    const {email,password} = req.body;
    try {
       const validUser = await User.findOne({email});
       if(!validUser){
        return next(errorHandler(404,"User not Found!"))
       }
      const validPassword = bcryptjs.compareSync(password,validUser.password);
      if(!validPassword) return next(errorHandler(401,'Wrong credentials'));
     
      const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
      const {password:pass,...rest} = validUser._doc
      res.cookie('access_token',token,{ httpOnly:true }).status(200).json(rest)

    } catch (error) {
      next(error);
    }
  }