const express = require('express');
const router = express.Router();
const GratitudeMessage = require('../models/gratitude_message');

router.post('/receive-slack-message', (req, res, next) => {
  GratitudeMessage.buildGratitudeMessage(req.body).then((gratitudeMessageAtts) => {
    GratitudeMessage.create(gratitudeMessageAtts);
    res.sendStatus(200);
  });
});

module.exports = router;
