import express from "express";
import { AddEmployee, DeleteEmployee, EditEmployee, GetAllEmployee } from "../controllers/EmployeeControler.js";
import upload from "../middleware/Multer.middleware.js";

const router = express.Router();


router.post("/Addemployee", upload.single("profileImage") , AddEmployee);
router.put("/UpdateEmployee/:id", upload.single("profileImage") , EditEmployee);
router.delete("/DeleteEmployee/:id", DeleteEmployee);
router.get("/GetEmployee", GetAllEmployee);

export default router;