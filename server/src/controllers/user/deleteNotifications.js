import User from "../../models/User";
import checkAuth from "../../utils/checkAuth";
import { ErrorHandler } from "../../utils/error";

export const deleteNotifications = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const { user, err } = checkAuth(authHeader);
    if (err) throw new ErrorHandler(422, err);
    const findedUser = await User.findById(user.id);
    if (!findedUser) throw new ErrorHandler(422, "Problem with database");
    findedUser.notifications = [];
    await findedUser.save();
    res.status(201).json({ message: "Success" });
  } catch (err) {
    next(err);
  }
};
