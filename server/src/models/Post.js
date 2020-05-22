import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    thread: { type: Schema.Types.ObjectId, ref: "Thread" },
    editedByAdmin: { type: Boolean },
  },
  { timestamps: { createdAt: true, updatedAt: true }, strict: false }
);

export default mongoose.model("Post", postSchema);
