const express = require('express');
const router = express.Router();
const GratitudeMessage = require('../models/gratitude_message');

router.post('/receive-slack-message', (req, res, next) => {
  const receiverUserIdRegex = req.body["text"].match(/(?<=<).*?(?=\|)/g)[0]
  const receiverUserNameRegex = req.body["text"].match(/(?<=\|).*?(?=>)/g)[0]
  const senderUserId = req.body["user_id"]
  const senderUserName = req.body["user_name"]

  // GratitudeMessage.create()
  res.sendStatus(200);
});

module.exports = router;
