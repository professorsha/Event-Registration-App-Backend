// const mongoose = require('mongoose');
import mongoose from 'mongoose';
// const Event = require('./models/Event'); // ваша модель события
import Event from './db/models/events.js';

// mongoose.connect('mongodb+srv://bagirairinam:sHSifiEJkbzZ9lvz@cluster0.nyhpa.mongodb.net/events', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

 const seedEvents = async () => {
//   const events = [
//     {
//       title: 'Event 1',
//       description: 'Description for Event 1',
//       event_date: new Date('2024-10-01'),
//       organizer: 'Organizer 1',
//     },
//     {
//       title: 'Event 2',
//       description: 'Description for Event 2',
//       event_date: new Date('2024-11-01'),
//       organizer: 'Organizer 2',
//     },
//   ];

//   try {
//     await Event.insertMany(events);
//     console.log('Events have been seeded!');
//     mongoose.connection.close();
//   } catch (error) {
//     console.error('Error seeding events:', error);
//     mongoose.connection.close();
//   }

mongoose.connect('mongodb+srv://bagirairinam:sHSifiEJkbzZ9lvz@cluster0.nyhpa.mongodb.net/events', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Connection error:', err);
  });
 }; 
 seedEvents();
