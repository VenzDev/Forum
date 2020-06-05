import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    isBaned: { type: Boolean, required: true, default: false },
    notifications: [{ type: Schema.Types.ObjectId, ref: "Notification" }],
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

export default mongoose.model("User", userSchema);
