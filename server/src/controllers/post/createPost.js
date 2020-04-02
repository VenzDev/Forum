import Post from "../../models/Post";
import Thread from "../../models/Thread";
import User from "../../models/User";
import Notification from "../../models/Notification";
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
        //notification for thread owner !
        if (user.id !== thread.user) {
          const userForNotification = await User.findById(thread.user);
          const notification = new Notification({
            threadOwner: userForNotification._id,
            user: user.id,
            thread: threadId
          });
          await notification.save();
          userForNotification.notifications.push(notification._id);
          await userForNotification.save();
        }
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
