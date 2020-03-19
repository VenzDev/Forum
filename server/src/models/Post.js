import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    thread: { type: Schema.Types.ObjectId, ref: "Thread" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

export default mongoose.model("Post", postSchema);
