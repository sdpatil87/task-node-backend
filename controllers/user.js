import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json({
        sucess: true,
        users
    })
}

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password
    });
    res.json({
        sucess: true,
        message: "Register Successfully.."
    })
}

export const getUserDetails = async (req, res) => {
    const { id } = req.body;
    const user = await User.findById(id).exec();;
    res.json({
        sucess: true,
        user
    })
}