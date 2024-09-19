import { getAllEvents, getEventById } from '../services/events.js';

export const getEventsController = async (req, res,next) => {
    try {
        const events = await getAllEvents();
      
        res.json({
          status: 200,
          message: 'Successfully found events!',
          data: events,
        });
      } catch(err) {
          next(err);
      }
  };


export const getEventByIdController = async (req, res,next) => {
  const { eventId } = req.params;
  const event = await getEventById(eventId); // Відповідь, якщо контакт не знайдено
  if (!event) {
    next(new Error('Event not found'));
    return;
  }

  // Відповідь, якщо контакт знайдено
  res.json({
    status: 200,
    message: `Successfully found student with id ${eventId}!`,
    data: event,
  });
};
