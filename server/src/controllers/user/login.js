import User from "../../models/User";
import bc from "bcrypt";

import generateToken from "../../utils/generateToken.js";
import { ErrorHandler } from "../../utils/error.js";
import { validatePassword, validateEmail } from "../../utils/validate.js";

import "babel-polyfill";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (validatePassword(password) === true || validateEmail(email) === true) {
      throw new ErrorHandler(422, "Email or password cannot be empty");
    }

    const _user = await User.findOne({ email }).populate({
      path: "notifications",
      populate: { path: "user", select: "_id name surname" },
    });
    let correctPassword = false;

    if (!_user) throw new ErrorHandler(422, "Invalid password or email");
    if (_user) correctPassword = await bc.compare(password, _user.password);

    if (correctPassword) {
      const { _id, name, surname, email, notifications, isAdmin, isBaned } = _user;
      const token = generateToken({ id: _id, name, surname, email });
      res
        .status(201)
        .json({ id: _id, name, surname, email, notifications, token, isAdmin, isBaned });
    } else {
      throw new ErrorHandler(422, "Invalid password or email");
    }
    next();
  } catch (err) {
    next(err);
  }
};
