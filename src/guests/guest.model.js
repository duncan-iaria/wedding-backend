import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'A first name is required for all guests'],
  },
  lastName: {
    type: String,
    required: [true, 'A last name is required for all guests'],
  },
  isComing: Boolean,
});

export const Guest = mongoose.model('guest', guestSchema);
