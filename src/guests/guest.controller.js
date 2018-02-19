import { Guest } from './guest.model';

export const findById = (request, response, next, id) => {
  Guest.findById(id)
    .then(tGuest => {
      if (!tGuest) {
        next(new Error('Guest with that ID not found'));
      } else {
        // attach the found guest to the request
        request.guest = tGuest;
        next();
      }
    })
    .catch(tError => next(tError));
};

export const getGuestById = (request, response, next) => {
  if (!request.guest) {
    next(new Error('no guest, this shouldnt happen'));
  } else {
    response.status(200).json(request.guest);
  }
};

export function getAllGuests(request, response, next) {
  console.log('guest find all');
  Guest.find()
    .then(allGuests => response.status(200).json(allGuests))
    .catch(tError => next(tError));
}

export function createGuest(request, response, next) {
  Guest.create(request.body)
    .then(tGuest => response.status(201).json({ tGuest }))
    .catch(tError => next(tError));
}

// findByParam,
// getGuestById,
// updateGuestById,
// deleteGuestById,
