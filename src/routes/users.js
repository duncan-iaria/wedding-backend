import express from 'express';
const router = express.Router();

router.get('/', userResponse);

function userResponse(request, response) {
  console.log('users route hit');
  response.json({ users: true });
}

export default router;
