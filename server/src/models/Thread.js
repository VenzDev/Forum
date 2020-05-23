import mongoose from "mongoose";
const Schema = mongoose.Schema;

const threadSchema = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    forum: { type: Schema.Types.ObjectId, ref: "Forum" },
    isClosed: { type: Boolean, required: true, default: false },
  },
  { versionKey: false, timestamps: { createdAt: true, updatedAt: true } }
);

export default mongoose.model("Thread", threadSchema);
