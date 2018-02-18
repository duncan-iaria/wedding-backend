import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  isComing: Boolean,
});

export const Guest = mongoose.model('guest', guestSchema);
