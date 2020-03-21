import bcrypt from "bcrypt";
import User from "../../models/User";
import { ErrorHandler } from "../../utils/error";
import { validatePassword, validateEmail } from "../../utils/validate";

export const register = async (req, res, next) => {
  try {
    const { name, surname, email, password } = req.body;

    if (validatePassword(password) || validateEmail(email))
      throw new ErrorHandler(422, "Email or password cannot be empty");

    const existEmail = await User.findOne({ email });

    if (existEmail) throw new ErrorHandler(422, "Email already taken");
    else {
      const hashPassword = await bcrypt.hash(password, 12);
      const createdUser = await User.create({ name, email, surname, password: hashPassword });

      if (createdUser) res.status(201).json({ message: "Success!" });
      else throw new ErrorHandler(422, "Problem with creating user");
    }
    next();
  } catch (err) {
    next(err);
  }
};
