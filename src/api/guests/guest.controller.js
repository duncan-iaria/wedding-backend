import merge from 'lodash.merge';
import { Guest } from './guest.model';

// Executed on all guest routes with a param (and attatched to the request)
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

// Get a single guest by the guest object that should be there from the findGuestById method
export const getGuestById = (request, response, next) => {
  if (!request.guest) {
    next(new Error('no guest, this shouldnt happen'));
  } else {
    response.status(200).json(request.guest);
  }
};

// Return all the guests
export const getAllGuests = (request, response, next) => {
  console.log('guest find all');
  Guest.find()
    .then(allGuests => response.status(200).json(allGuests))
    .catch(tError => next(tError));
};

// Create a new guest
export const createGuest = (request, response, next) => {
  Guest.create(request.body)
    .then(tGuest => response.status(201).json({ tGuest }))
    .catch(tError => next(tError));
};

export const updateGuestById = (request, response, next) => {
  if (!request.guest) {
    next(new Error('no guest select for updating (error with request)'));
  } else {
    request.guest = merge(request.guest, request.body);
    request.guest
      .save()
      .then(something => {
        console.log(something);
        response.status(200).json(something);
      })
      .catch(tError => next(tError));
  }
};

// Delete a guest via the id (again from the guest found in the param of the request)
export const deleteGuestById = (request, response, next) => {
  if (!request.guest) {
    next(new Error('no guest selected for deletion'));
  } else {
    Guest.deleteOne({ id: request.guest.id })
      .then(tSuccess => {
        console.log('deleting guest with id of:', request.guest.id);
        response.status(200).json({ message: 'guest successfully deleted' });
      })
      .catch(tError => {
        next(tError);
      });
  }
};
// findByParam,
// getGuestById,
// updateGuestById,
// deleteGuestById,
