import Thread from "../../models/Thread";
import Forum from "../../models/Forum";
import checkAuth from "../../utils/checkAuth";
import { ErrorHandler } from "../../utils/error";

export const createThread = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const { user, err } = checkAuth(authHeader);
    if (err) throw new ErrorHandler(422, err);
    else {
      const { threadTopic, content, forumName } = req.body;
      const forum = await Forum.findOne({ name: forumName });
      if (forum) {
        const newThread = new Thread({
          name: threadTopic,
          content,
          user: user.id,
          forum: forum._id
        });
        forum.threads.push(newThread._id);
        await newThread.save();
        await forum.save();
        res.status(201).json(newThread);
      } else throw new ErrorHandler(422, "invalid forum name");
    }

    next();
  } catch (err) {
    next(err);
  }
};
