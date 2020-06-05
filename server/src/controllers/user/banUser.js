import User from "../../models/User";
import { ErrorHandler } from "../../utils/error";

export const banUser = async (req, res, next) => {
  try {
    const { unBan, userId, banTime } = req.body;
    if (unBan === false) await User.findByIdAndUpdate(userId, { isBaned: true });
    else if (unBan === true) await User.findByIdAndUpdate(userId, { isBaned: false });
    res.status(200).json({ status: "success" });
  } catch (err) {
    next(err);
  }
};
