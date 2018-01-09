var express = require('express');
var router = express.Router();
var log = require('../logger/log.js');

// Get Homepage /mas/
router.post('/POSTreciever', function(req, res) {
	log.system.info('Recieved body ', req.body)

	console.log('Request body -> ', req.body)
	res.sendStatus(200);
});

module.exports = router;