import mongoose from "mongoose";

const Schema = mongoose.Schema;

const forumSchema = new Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  threads: [{ type: Schema.Types.ObjectId, require: true, ref: "Thread" }]
});

export default mongoose.model("Forum", forumSchema);
