import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  organization: { type: String, required: true },
  issueDate: { type: String, required: true },
  image: { type: String, default: "" },
  link: { type: String, default: "" }
}, { timestamps: true });

export default mongoose.model("Certificate", certificateSchema);