import { Department } from "../Models/Department.model.js";
import Diamond from "../Models/diamond.model.js";

export const createDiamond = async (req, res) => {
  try {
    const { name, carat, color, clarity, price, DepartmentId } = req.body;
    
    const diamondimage = req.file.path ;
    
    if (DepartmentId) {
      const department = await Department.findById(DepartmentId);
      if (!department) return res.status(404).json({ error: "Department not found." });
      
      const newDiamond = new Diamond({ 
        name, 
        carat, 
        color, 
        clarity, 
        price, 
       image: diamondimage, 
        Department: DepartmentId 
      });
      
      await newDiamond.save();
      
      await Department.findByIdAndUpdate(DepartmentId, {
        $push: { Diamonds: newDiamond._id },
      });
      
      return res.status(201).json({ 
        message: "Diamond added successfully!", 
        diamond: newDiamond 
      });
    } else {
      const newDiamond = new Diamond({ 
        name, 
        carat, 
        color, 
        clarity, 
        price, 
        image: diamondimage
      });
      
      await newDiamond.save();
      
      return res.status(201).json({ 
        message: "Diamond added successfully!", 
        diamond: newDiamond 
      });
    }
  } catch (error) {
    console.error("Error creating diamond:", error);
    return res.status(500).json({ error: "Failed to create diamond." });
  }
};
  

export const getDiamonds = async (req, res) => {
  try {
    const diamonds = await Diamond.find().populate("Department", "name");
    return res.status(200).json(diamonds);
  } catch (error) {
   return res.status(500).json({ error: "Failed to fetch diamonds." });
  }
};

export const getDiamondById = async (req, res) => {
  try {
    const diamond = await Diamond.findById(req.params.id);
    if (!diamond) return res.status(404).json({ error: "Diamond not found." });
    res.status(200).json(diamond);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch diamond." });
  }
};

// Update Diamond
export const updateDiamond = async (req, res) => {
    try {
      const { name, carat, color, clarity, price , DepartmentId } = req.body;
      const department = await Department.findById(DepartmentId);
      if (!department) return res.status(404).json({ error: "Department not found." });

      const image = req.file ? req.file.path : undefined; 
  
      const updateData = { name, carat, color, clarity, price , Department: DepartmentId };
      if (image) updateData.image = image;
  
      const updatedDiamond = await Diamond.findByIdAndUpdate(req.params.id, updateData, { new: true });
  
      if (!updatedDiamond) return res.status(404).json({ error: "Diamond not found." });
  
      res.status(200).json({ message: "Diamond updated successfully!", diamond: updatedDiamond });
    } catch (error) {
      res.status(500).json({ error: "Failed to update diamond." });
    }
  };
  

export const deleteDiamond = async (req, res) => {
  try {
    const deletedDiamond = await Diamond.findByIdAndDelete(req.params.id);
    if (!deletedDiamond) return res.status(404).json({ error: "Diamond not found." });
    res.status(200).json({ message: "Diamond deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete diamond." });
  }
};
