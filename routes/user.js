import express from "express";
import {  register, login, getAllUsers, getUserProfile } from "../controllers/user.js";
const router = express.Router();

router.get("/all",getAllUsers);
router.post("/register", register);
router.post("/login", login);

router.get("/me", getUserProfile);

export default router;  
