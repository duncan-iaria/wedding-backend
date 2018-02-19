import express from 'express';

export const userRouter = express.Router();

userRouter.get('/', userResponse);

function userResponse(request, response) {
  console.log('users route hit');
  response.json({ users: true });
}
