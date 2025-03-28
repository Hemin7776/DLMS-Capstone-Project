import express from "express";
import { AddDepartment, DeleteDepartment, GetAllDepartments, UpdateDepartment } from "../controllers/DepartmentController.js";

const router = express.Router();

router.post("/AddDepartment", AddDepartment);
router.get('/GetAllDepartments', GetAllDepartments);
router.delete('/DeleteDepartment/:id', DeleteDepartment);
router.put('/UpdateDepartment/:id', UpdateDepartment);

export default router;