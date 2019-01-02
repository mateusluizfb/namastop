const express = require('express');
const router = express.Router();
const GratitudeMessage = require('../models/gratitude_message');

router.get('/', function(req, res, next) {
  GratitudeMessage.find({}, (err, gratitudeMessages) => {
    res.render('home', { gratitudeMessages });
  })
});

module.exports = router;
