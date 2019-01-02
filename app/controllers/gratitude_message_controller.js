const express = require('express');
const router = express.Router();
const GratitudeMessage = require('../models/gratitude_message');

router.post('/receive-slack-message', (req, res, next) => {
  const gratitude_message_atts = GratitudeMessage.buildGratitudeMessage(req.body);
  GratitudeMessage.create(gratitude_message_atts);
  res.sendStatus(200);
});

module.exports = router;
