import Thread from "../../models/Thread";
import { ErrorHandler } from "../../utils/error";

export const findThread = async (req, res, next) => {
  try {
    const { id } = req.query;
    const thread = await Thread.findById(id);
    if (thread) res.status(201).json(thread);
    else throw new ErrorHandler(422, "Thread not found");
    next();
  } catch (err) {
    next(err);
  }
};
