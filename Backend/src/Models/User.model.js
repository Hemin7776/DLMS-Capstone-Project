import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String, required: true },
  token: { type: String, default: "" },
  otp: {
    value: { type: String },
    expireAt: { type: Date },
    verified: { type: Boolean, default: "false" },
  },
  Role: {
    type: String,
    enum: ["Employee", "Admin"],
    default: "Employee",
  },
  Department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
});

export const Usermodle = mongoose.model("User", Userschema);
