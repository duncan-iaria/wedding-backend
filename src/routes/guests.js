const express = require('express');
const router = express.Router();

router.get('/', guestsResponse);

function guestsResponse(request, response) {
  console.log('guests api hit');
  response.json({ guests: true });
}

module.exports = router;
