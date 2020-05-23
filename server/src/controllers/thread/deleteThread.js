import Thread from "../../models/Thread";
import Forum from "../../models/Forum";
import Post from "../../models/Post";
import { ErrorHandler } from "../../utils/error";

export const deleteThread = async (req, res, next) => {
  try {
    const { id } = req.query;

    const thread = await Thread.findById(id);
    if (!thread) throw new ErrorHandler(422, "Thread not found");

    const forum = await Forum.findById(thread.forum);
    if (!forum) throw new ErrorHandler(422, "Forum not found");

    thread.posts.map(async (postId) => {
      await Post.findByIdAndDelete(postId);
    });

    let list = forum.threads;

    list = list.filter((threadId) => threadId !== thread._id);

    forum.threads = list;

    await forum.save();
    await thread.remove();

    res.status(202).json({ status: "success" });
  } catch (err) {
    next(err);
  }
};
