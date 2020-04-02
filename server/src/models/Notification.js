import mongoose from "mongoose";

const Schema = mongoose.Schema;

const notificationSchema = new Schema(
  {
    threadOwner: { type: Schema.Types.ObjectId, ref: "User" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    thread: { type: Schema.Types.ObjectId, ref: "Thread" }
  },
  { timestamps: { createdAt: true } }
);

export default mongoose.model("Notification", notificationSchema);
