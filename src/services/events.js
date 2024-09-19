
import { EventsCollection } from '../db/models/events.js';

export const getAllEvents = async () => {
  const events = await EventsCollection.find();
  return events;
};

// export const getContactById = async (contactId) => {
//   const contact = await EventsCollection.findById(contactId);
// //   console.log({contact});
//   return contact;
// };
