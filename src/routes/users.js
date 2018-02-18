const express = require('express');
const router = express.Router();

router.get('/', userResponse);

function userResponse(request, response) {
  console.log('users route hit');
  response.json({ users: true });
}

module.exports = router;
