import mongoose from "mongoose";

const diamondSchema = new mongoose.Schema({
  name: { type: String, required: true },
  carat: { type: Number, required: true },
  color: { type: String, required: true },
  clarity: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
   Department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },
}, { timestamps: true });

const Diamond = mongoose.model("Diamond", diamondSchema);
export default Diamond;
