import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  authorImg: { type: String, required: true },
  image: { type: String, required: true },
  imageUrl: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
