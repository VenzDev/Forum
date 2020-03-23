import forum from "../../models/Forum";
import { ErrorHandler } from "../../utils/error";

export const getForums = async (req, res, next) => {
  try {
    const forums = await forum.find({});
    if (forums) res.status(201).json(forums);
    else ErrorHandler(422, "Problem with mongoDb");
  } catch (err) {
    next(err);
  }
};
