// export const creatGuest = (model) => (req, res, next) => {
//     return controllers.createOne(model, req.body)
//       .then(doc => res.status(201).json(doc))
//       .catch(error => next(error))
//   }
import { Guest } from './guest.model';
export function getAllGuests(request, response, next) {
  response.json({ getAllGuests: true });
}

export async function createGuest(request, response, next) {
  console.log(request.body);
  let newGuest;
  if (request.body != null) {
    newGuest = await Guest.create(request.body);
  }
  // const tempGuest = {
  //   firstName: 'Duncan',
  //   lastName: 'Iaria',
  //   isComing: true,
  // };

  // Guest.create(tempGuest);
  response.status(201).json({ newGuest });
}
