import Forum from "../../models/Forum";
import { ErrorHandler } from "../../utils/error";

export const deleteForum = async (req, res, next) => {
  try {
    const { id } = req.query;
    if (!id) throw new ErrorHandler(422, "id cannot be empty!");
    await Forum.findByIdAndRemove(id);
    res.status(202).json({ status: "success" });
    next();
  } catch (err) {
    next(err);
  }
};
