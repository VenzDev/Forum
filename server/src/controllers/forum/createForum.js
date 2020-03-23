import Forum from "../../models/Forum";
import { ErrorHandler } from "../../utils/error";

export const createForum = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    if (!name) throw new ErrorHandler(422, "name cannot be empty!");
    const forum = new Forum({ name, description });
    const createdForum = await forum.save();
    if (createdForum) res.status(202).json(forum);
    else throw new ErrorHandler(422, "Problem with database");
    next();
  } catch (err) {
    next(err);
  }
};
