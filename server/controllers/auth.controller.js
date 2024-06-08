import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/errorHandler.js';
import jwt from 'jsonwebtoken';

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export const signup = async (req, res, next) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return next(errorHandler(400, 'All fields are required'));
  }

  try {
    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    return res.sendStatus(201);
  } catch (error) {
    return next(error);
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(errorHandler(400, 'All fields are required'));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'Invalid credentials'));
    }

    const isValidPassword = await bcryptjs.compare(
      password,
      validUser.password,
    );
    if (!isValidPassword) {
      return next(errorHandler(401, 'Invalid credentials'));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    // const { password, ...user } = validUser._doc;
    delete validUser._doc.password;
    return res.status(200).cookie('token', token).json(validUser);
  } catch (error) {
    return next(error);
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export const google = async (req, res, next) => {
  const { email, name, photoUrl } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

      delete validUser._doc.password;
      return res.status(200).cookie('token', token).json(validUser);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = await bcryptjs.hash(generatedPassword, 10);
      const newUser = new User({
        email,
        username:
          name.toLowerCase().split(' ').join('') +
          Math.random().toString(9).slice(-4),
        password: hashedPassword,
        profilePicture: photoUrl,
      });

      newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      delete newUser._doc.password;
      return res.status(201).cookie('token', token).json(newUser);
    }
  } catch (error) {
    return next(error);
  }
};
