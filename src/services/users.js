import { UsersCollection } from '../db/models/users.js';
export const createUser = async (payload) => {
  const user = await UsersCollection.create(payload);
  return user;
};
export const getUserById =async(eventId)=>{
  // console.log(eventId);
  const user = await UsersCollection.find({ eventId: eventId });
  return user;
};