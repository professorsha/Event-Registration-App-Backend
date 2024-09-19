import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { getAllEvents, getEventById } from './services/events.js';

const PORT = Number(env('PORT', '3000'));
// console.log(PORT);
export const setupServer = () => {
  const app = express();
  // app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/events', async (req, res) => {
    const events = await getAllEvents();
    res.status(200).json({
      status: 200,
      message: `Success!`,
      data: events,
    });
  });
  app.get('/events/:eventId', async (req, res) => {
    const { eventId } = req.params;

    const contact = await getEventById(eventId);

    // Відповідь, якщо контакт не знайдено
    if (!contact) {
      res.status(404).json({
        message: 'Contact not found',
      });
      return;
    }

    // Відповідь, якщо контакт знайдено
    res.status(200).json({
      status: 200,
      message: 'Successfully found contact with id ${contactId}!',
      data: contact,
    });
  });
  app.use('*', (req, res) => {
    res.status(404).json({ message: 'NOT FOUND' });
  });
  app.use((err, req, res) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
