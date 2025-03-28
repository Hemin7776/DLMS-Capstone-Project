import express from "express";
import { Department } from "../Models/Department.model.js";

export const AddDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const existingDepartment = await Department.findOne({ name });

    if (existingDepartment) {
      return res.status(400).json({ message: "Department already exists" });
    }

    const department = new Department({ name });
    await department.save();
    return res
      .status(201)
      .json({
        message: "Department Added Successfully",
        department,
        success: true,
      });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const UpdateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ message: "Please provide a department id" });
    }
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ message: "Please provide a department name" });
    }
    const department = await Department.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }
    return res.json({
      message: "Department updated successfully",
      department,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const GetAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const DeleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ message: "Please provide a department id" });
    }
    const department = await Department.findByIdAndDelete(id);
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }
    res.json({ message: "Department deleted successfully", success: true });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
