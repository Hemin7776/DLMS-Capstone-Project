import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  Diamonds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Diamond" }],
});

export const Department = mongoose.model("Department", departmentSchema);
