import forum from "../../models/Forum";
import { ErrorHandler } from "../../utils/error";

export const getForums = async (req, res, next) => {
  try {
    const forums = await forum
      .find({})
      .populate({
        path: "threads",
        populate: { path: "user", select: "_id name surname" },
        options: { sort: { createdAt: -1 } }
      })
      .populate({
        path: "threads",
        populate: { path: "posts", select: "createdAt" },
        options: { sort: { createdAt: -1 } }
      });
    if (forums) res.status(201).json(forums);
    else ErrorHandler(422, "Problem with mongoDb");
  } catch (err) {
    next(err);
  }
};
