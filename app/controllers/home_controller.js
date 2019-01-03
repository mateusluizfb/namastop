const express = require('express');
const router = express.Router();
const GratitudeMessage = require('../models/gratitude_message');

router.get('/', function(req, res, next) {
  GratitudeMessage.find({}, (err, gratitudeMessages) => {
    res.render('home', { gratitudeMessages: gratitudeMessages.reverse() }); // TODO: Add date to the model and sort using it
  })
});

module.exports = router;
