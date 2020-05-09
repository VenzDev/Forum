import checkAuth from "../../utils/checkAuth";
import User from "../../models/User";
import { ErrorHandler } from "../../utils/error";

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { user, err } = checkAuth(token);
    const { id, email, name, surname } = user;

    const _user = await User.findById(id).populate({
      path: "notifications",
      populate: { path: "user", select: "_id name surname" },
    });

    if (user)
      res
        .status(202)
        .json({
          id,
          email,
          name,
          surname,
          notifications: _user.notifications,
          isAdmin: _user.isAdmin,
        });
    else throw new ErrorHandler(400, err);
  } catch (err) {
    next(err);
  }
};
