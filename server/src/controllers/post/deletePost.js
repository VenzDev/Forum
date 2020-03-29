import Post from "../../models/Post";
import Thread from "../../models/Thread";
import { ErrorHandler } from "../../utils/error";

export const deletePost = async (req, res, next) => {
  try {
    const id = req.body.id;
    const findedPost = await Post.findOne({ _id: id });
    if (!findedPost) throw new ErrorHandler(422, "Post not found");
    const findedThread = await Thread.findById(findedPost.thread);
    if (!findedThread) throw new ErrorHandler(422, "Thread not found");
    const newPostArray = findedThread.posts.filter(post => post !== id);
    findedThread.posts = newPostArray;
    await findedThread.save();
    await findedPost.remove();
    res.status(201).json({ message: "Success" });
    next();
  } catch (err) {
    next(err);
  }
};
