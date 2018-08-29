var express = require('express');
var router = express.Router();
var log = require('../logger/log.js');

// Get Homepage /mas/
router.post('/POSTreciever', function(req, res) {
	console.log('Recieved body ', req.body)

	console.log('Request body -> ', req.body)
	res.sendStatus(204);
});

module.exports = router;