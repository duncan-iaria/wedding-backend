import express from 'express';
import { createGuest, getAllGuests } from '../guests/guest.controller';
const router = express.Router();

router
  .route('/')
  .get(getAllGuests)
  .post(createGuest);
// router.get('/', guestsResponse);

function guestsResponse(request, response) {
  console.log('guests api hit');
  response.json({ guests: true });
}

export default router;
