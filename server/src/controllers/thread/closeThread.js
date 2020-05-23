import Thread from "../../models/Thread";
import { ErrorHandler } from "../../utils/error";

export const closeThread = async (req, res, next) => {
  try {
    const { id } = req.query;
    await Thread.findByIdAndUpdate(id, { isClosed: true });
    res.status(202).json({ status: "success" });
    next();
  } catch (err) {
    next(err);
  }
};
