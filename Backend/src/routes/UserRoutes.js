import express from "express";
import { forgotPassword,  Login, resetPassword, Signup, UpdateProfile, verifyOtp } from "../controllers/Usercontroller.js";
import upload from "../middleware/Multer.middleware.js";

const router = express.Router();

router.post("/Signup", upload.single("profileImage"), Signup);
router.post("/Login", Login);
router.post("/forgotpassword", forgotPassword);
router.post("/verifyotp", verifyOtp);
router.post("/resetpassword", resetPassword);
router.put("/UpdateProfile/:id", upload.single("profileImage") , UpdateProfile);

export default router;
