import Forum from "../../models/Forum";
import { ErrorHandler } from "../../utils/error";

export const editForum = async (req, res, next) => {
  try {
    const { id, name, description } = req.body;
    if (!id) throw new ErrorHandler(422, "id cannot be empty!");
    await Forum.findByIdAndUpdate(id, { name, description });
    res.status(202).json({ status: "success" });
    next();
  } catch (err) {
    next(err);
  }
};
