var express = require('express');
var router = express.Router();

var log = require('../logger/log.js');

// Get Homepage /mas/
router.get('/homepage', function(req, res) {
  res.json({
    success: 'ok',
    request: 'GET /homepage',
    msg: 'Main page of Discovery Medusa API',
    response: ''
  });
});

module.exports = router;