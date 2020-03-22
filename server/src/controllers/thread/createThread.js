import Thread from "../../models/Thread";
import checkAuth from "../../utils/checkAuth";
import { ErrorHandler } from "../../utils/error";

export const createThread = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const { user, err } = checkAuth(authHeader);
    if (err) throw new ErrorHandler(422, err);
    else {
      const { name, content } = req.body;
      const newThread = new Thread({
        name,
        content,
        user: user.id
      });
      await newThread.save();
      res.status(201).json(newThread);
    }

    next();
  } catch (err) {
    next(err);
  }
};
