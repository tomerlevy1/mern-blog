import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const signup = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ message: 'Bad Request' });
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
    // TODO: check the type of error and return the appropriate status code
    return res
      .status(500)
      .json({ message: error.message, error: 'Internal Server Error' });
  }
};

export const signin = (req, res) => {
  const body = req.body;
  res.json(body);
};
