import { model, Schema } from 'mongoose';
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    aboutEvent: {
      type: String,
      required: true,
      enum: ['social', 'friends', 'myself'],
      default: 'social',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const UsersCollection = model('User', userSchema);