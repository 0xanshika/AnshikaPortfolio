import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: [String],
  techStack: [String],
  image: { type: String, default: "" },
  github: { type: String, default: "" },
  live: { type: String, default: "" },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Project", projectSchema);