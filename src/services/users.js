import { UsersCollection } from '../db/models/users.js';
export const createUser = async (payload) => {
  const user = await UsersCollection.create(payload);
  return user;
};