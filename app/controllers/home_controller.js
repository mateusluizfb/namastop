const express = require('express');
const router = express.Router();
const GratitudeMessage = require('../models/gratitude_message');

router.get('/', function(req, res, next) {
  GratitudeMessage.find({}).sort({created_at: 'desc'}).exec((err, gratitudeMessages) => {
    res.render('home', { gratitudeMessages: gratitudeMessages });
  });
});

module.exports = router;
