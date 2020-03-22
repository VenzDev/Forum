import checkAuth from "../../utils/checkAuth";
import { ErrorHandler } from "../../utils/error";

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { user, err } = checkAuth(token);
    const { id, email, name, surname } = user;
    if (user) res.status(202).json({ id, email, name, surname });
    else throw new ErrorHandler(400, err);
  } catch (err) {
    next(err);
  }
};
