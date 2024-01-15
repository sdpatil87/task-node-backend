import express from "express";
import { getAllUsers, getUserDetails, registerUser } from "../controllers/user.js";
const router = express.Router();

router.get("/all",getAllUsers);
router.post("/new", registerUser);
router.get("/userid", getUserDetails);

export default router;
