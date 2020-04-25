import Thread from "../../models/Thread";
import { ErrorHandler } from "../../utils/error";
import checkAuth from "../../utils/checkAuth";

export const findUserThreads = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const { user, err } = checkAuth(authHeader);
    if (err) throw new ErrorHandler(422, err);
    const threads = await Thread.find({ user: user.id })
      .populate({
        path: "posts",
        populate: { path: "user", select: "_id name surname" },
      })
      .populate({ path: "user", select: "_id name surname" });
    if (threads) res.status(201).json(threads);
    else throw new ErrorHandler(422, "Thread not found");
    next();
  } catch (err) {
    next(err);
  }
};
