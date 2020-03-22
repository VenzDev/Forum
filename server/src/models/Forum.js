import mongoose from "mongoose";

const Schema = mongoose.Schema;

const forumSchema = new Schema({
  name: { type: String, reguire: true },
  threads: [{ type: Schema.Types.ObjectId, reguire: true }]
});

export default mongoose.model("Forum", forumSchema);
