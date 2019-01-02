const express = require('express');
var router = express.Router();

router.post('/receive-slack-message', function(req, res, next) {
  res.sendStatus(200);
});

module.exports = router;
