import express from 'express';
import {
  createGuest,
  getAllGuests,
  findById,
  getGuestById,
  // updateGuestById,
  // deleteGuestById,
} from '../guests/guest.controller';
const router = express.Router();

router.param('id', findById);

router
  .route('/')
  .get(getAllGuests)
  .post(createGuest);

router.route('/:id').get(getGuestById);
// .put(updateGuestById)
// .delete(deleteGuestById);

function guestsResponse(request, response) {
  console.log('guests api hit');
  response.json({ guests: true });
}

export default router;
