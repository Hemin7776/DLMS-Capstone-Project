import express from "express";
import { Usermodle } from "../Models/User.model.js";
import sendMail from "../utils/email-send.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Department } from "../Models/Department.model.js";

export const AddEmployee = async (req, res) => {
  try {
    const { name, email, password, DepartmentId } = req.body;

    if (!name || !email || !password || !DepartmentId) {
      return res.status(400).json({
        message: "Please fill all required fields (name, email, password, DepartmentId).",
      });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Please upload a profile image." });
    }

    const existingUser = await Usermodle.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists." });
    }
    const department = await Department.findById(DepartmentId);

    if (!department) {
      return res.status(404).json({ message: "Department not found." });
    }


    const hashedPassword = await bcrypt.hash(password, 10);
    const profileImage = req.file.path;

    const newUser = await Usermodle.create({
      name,
      email,
      password: hashedPassword,
      profileImage,
      Department: DepartmentId, 
    });

    await Department.findByIdAndUpdate(DepartmentId, {
      $push: { employees: newUser._id },
    });

    await sendMail({
      email: [email],
      subject: `Welcome ${name}`,
      htmlTemplate: `
        <h1>Welcome ${name} to Diamond Management System</h1>
        <p>Your account has been successfully created.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p>You can now log in using these credentials.</p>
      `,
    });

    const payload = { user: { id: newUser._id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY || "defaultsecret", {
      expiresIn: "1h",
    });

    newUser.token = token;
    await newUser.save();

    res.status(201).json({
      message: "Employee added successfully!",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        profileImage: newUser.profileImage,
        Department: newUser.Department,
        token: newUser.token,
      },
      success: true,
    });
  } catch (error) {
    console.error("Error in AddEmployee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const GetAllEmployee = async (req, res) => {
  try {
    const employees = await Usermodle.find().populate("Department", "name");
    res.status(200).json({ employees, success: true });
  } catch (error) {
    console.error("Get all employees error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const EditEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password , DepartmentId } = req.body;

    if (!name || !email || !password || !DepartmentId) {
      return res.status(400).json({ message: "Please fill all the fields" }); 
    }

    if (!id) {
      return res.status(400).json({ message: "Employee ID is required." });
    }
    const department = await Department.findById(DepartmentId);
    if (!department) {
      return res.status(404).json({ message: "Department not found." });
    }


    let updateData = { name, email , Department: DepartmentId};

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    if (req.file) {
      updateData.profileImage = req.file.path;
    }

    const updatedUser = await Usermodle.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    await Department.findByIdAndUpdate(DepartmentId, {
      $push: { Diamonds: id },
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "Employee not found." });
    }

    return res.status(200).json({
      message: "Employee updated successfully.",
      user: updatedUser,
      success: true,
    });

  } catch (error) {
    console.error("Edit employee error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const DeleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Employee ID is required." });
    }

    const deletedUser = await Usermodle.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "Employee not found." });
    }

    res.status(200).json({
      message: "Employee deleted successfully.",
      success: true,
    });
  } catch (error) {
    console.error("Delete employee error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
