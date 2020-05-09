import User from "../../models/User";
import { ErrorHandler } from "../../utils/error";

export const fetchProfil = async (req, res, next) => {
  try {
    const { id } = req.query;
    const fetchedUser = await User.findById(id).select("name surname createdAt email");
    if (fetchedUser) res.status(201).json(fetchedUser);
    else throw new ErrorHandler(422, "Profil not found!");
    next();
  } catch (err) {
    next(err);
  }
};
