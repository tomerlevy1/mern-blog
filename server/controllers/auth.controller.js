import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/errorHandler.js';

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

export const signin = (req, res) => {
  const body = req.body;
  res.json(body);
};
