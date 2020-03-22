import Post from "../../models/Post";
import Thread from "../../models/Thread";
import checkAuth from "../../utils/checkAuth";
import { ErrorHandler } from "../../utils/error";

export const createPost = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const { user, err } = checkAuth(authHeader);
    if (err) throw new ErrorHandler(422, err);
    else {
      const { content, threadId } = req.body;

      const newPost = new Post({
        content,
        thread: threadId,
        user: user.id
      });

      const thread = await Thread.findById(threadId);

      if (!thread) throw new ErrorHandler(422, "Invalid thread id!");
      else {
        thread.posts.push(newPost._id);
        await thread.save();
        await newPost.save();
      }

      res.status(201).json(newPost);
    }

    next();
  } catch (err) {
    next(err);
  }
};
