import express from 'express';
import {
  createGuest,
  getAllGuests,
  findById,
  getGuestById,
  // updateGuestById,
  // deleteGuestById,
} from './guest.controller';

export const guestRouter = express.Router();

guestRouter.param('id', findById);

guestRouter
  .route('/')
  .get(getAllGuests)
  .post(createGuest);

guestRouter.route('/:id').get(getGuestById);
// .put(updateGuestById)
// .delete(deleteGuestById);

function guestsResponse(request, response) {
  console.log('guests api hit');
  response.json({ guests: true });
}
