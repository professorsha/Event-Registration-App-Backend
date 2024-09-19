// const mongoose = require('mongoose');
import mongoose from 'mongoose';
// const Event = require('./models/Event'); // ваша модель события
import Event from './db/models/events.js';

mongoose.connect('mongodb+srv://bagirairinam:sHSifiEJkbzZ9lvz@cluster0.nyhpa.mongodb.net/events', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

 const seedEvents = async () => {
  const events = [
    {
      title: 'Event 1',
      description: 'Description for Event 1',
      event_date: new Date('2024-10-01'),
      organizer: 'Organizer 1',
    },
    {
      title: 'Event 2',
      description: 'Description for Event 2',
      event_date: new Date('2024-11-01'),
      organizer: 'Organizer 2',
    },
    {
      title: 'Event 3',
      description: 'Description for Event 3',
      event_date: new Date('2024-10-11'),
      organizer: 'Organizer 3',
    },
    {
      title: 'Event 4',
      description: 'Description for Event 4',
      event_date: new Date('2024-11-05'),
      organizer: 'Organizer 2',
    },{
      title: 'Event 5',
      description: 'Description for Event 5',
      event_date: new Date('2024-10-03'),
      organizer: 'Organizer 1',
    },
    {
      title: 'Event 6',
      description: 'Description for Event 6',
      event_date: new Date('2024-11-15'),
      organizer: 'Organizer 3',
    },
    {
      title: 'Event 7',
      description: 'Description for Event 7',
      event_date: new Date('2024-11-01'),
      organizer: 'Organizer 1',
    },
    {
      title: 'Event 8',
      description: 'Description for Event 8',
      event_date: new Date('2024-11-22'),
      organizer: 'Organizer 4',
    },
    {
      title: 'Event 9',
      description: 'Description for Event 9',
      event_date: new Date('2024-10-03'),
      organizer: 'Organizer 5',
    },
    {
      title: 'Event 10',
      description: 'Description for Event 10',
      event_date: new Date('2024-11-25'),
      organizer: 'Organizer 3',
    },
    {
      title: 'Event 11',
      description: 'Description for Event 11',
      event_date: new Date('2024-10-23'),
      organizer: 'Organizer 1',
    },
    {
      title: 'Event 12',
      description: 'Description for Event 12',
      event_date: new Date('2024-10-22'),
      organizer: 'Organizer 4',
    },
  ];

  try {
    await Event.insertMany(events);
    console.log('Events have been seeded!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding events:', error);
    mongoose.connection.close();
  }
// Перевірка конекта до бази
// mongoose.connect('mongodb+srv://bagirairinam:sHSifiEJkbzZ9lvz@cluster0.nyhpa.mongodb.net/events', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(() => {
//     console.log('Connected to MongoDB');
//   }).catch(err => {
//     console.error('Connection error:', err);
//   });
 }; 
 seedEvents();
