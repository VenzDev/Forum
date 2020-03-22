import User from "../models/User";
import Thread from "../models/Thread";

export const search = async (req, res, next) => {
  try {
    const data = req.query.data;
    console.log(data);
    const reg = new RegExp(data);
    const findedUsers = await User.find({ name: { $regex: reg, $options: "i" } }).select(
      "name _id"
    );
    const findedThreads = await Thread.find({ name: { $regex: reg, $options: "i" } }).select(
      "name _id"
    );
    res.status(201).json({ users: findedUsers, threads: findedThreads });
    next();
  } catch (err) {
    next(err);
  }
};
