import { User } from "../models/user.js";

import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";


export const login = async (req, res) => {
    const {email,password} = req.body;

    const user = await User.findOne({email}).select("+password");

    if(!user) 
    return res.status(404).json({
       success:false,
       message:"Invalid email and password.." 
    });

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch)
    return res.status(404).json({
        success:false,
        message:"Invalid email and password.."
    })

    sendCookie(user,res,`Welcome back, ${user.name}`,200);
    
};


export const register = async (req, res) => {
    const { name, email, password } = req.body;
   
    let user = await User.findOne({email});

    if(user) return res.status(404).json({
        success:false,
        message:"User already exist"
    }) 

    const hashedPassword = await bcrypt.hash(password,10);

    user = await User.create({ 
        name, 
        email,
        password:hashedPassword
    });

    sendCookie(user,res,"Registered successfully...")
   
};

export const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json({
        success: true,
        users
    })
};

export const getUserProfile = async (req, res) => {
    const { id } = req.body;
    const user = await User.findById(id).exec();;
    res.json({
        success: true,
        user
    })
};