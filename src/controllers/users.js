import { createUser,getUserById } from '../services/users.js';


export const createUserController = async (req, res) => {
  const user = await createUser(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a user!`,
    data: user,
  });
};

export const getUserByIdController = async (req, res,next) => {
  const { eventId } = req.params;
  const user = await getUserById(eventId); // Відповідь, якщо контакт не знайдено
  if (!user) {
    next(new Error('User not found'));
    return;
  }

  // Відповідь, якщо контакт знайдено
  res.json({
    status: 200,
    message: `Successfully found participants with id ${eventId}!`,
    data: user,
  });
};