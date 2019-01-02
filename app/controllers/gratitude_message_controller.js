const express = require('express');
const router = express.Router();
const GratitudeMessage = require('../models/gratitude_message');

router.post('/receive-slack-message', (req, res, next) => {
  const receiverUserIdRegex = req.body["text"].match(/(?<=<).*?(?=\|)/g)[0]
  const senderUserId = req.body["user_id"]

  // GratitudeMessage.create()
  res.sendStatus(200);
});

module.exports = router;
