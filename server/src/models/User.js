import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    notifications: [{ type: Schema.Types.ObjectId, ref: "Notification" }]
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

export default mongoose.model("User", userSchema);
