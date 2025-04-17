import express from "express";
import { createDiamond, getDiamonds, getDiamondById, updateDiamond, deleteDiamond } from "../controllers/diamondcontroller.js";
import upload from "../middleware/Multer.middleware.js";

const router = express.Router();

router.post("/Adddiamonds", upload.single('diamondimage'), createDiamond);       
router.get("/GetDiamonds", getDiamonds);          
router.get("/:id", getDiamondById);   
router.put("/Updatediamonds/:id", upload.single('diamondimage'), updateDiamond);   
router.delete("/:id", deleteDiamond); 

export default router;
