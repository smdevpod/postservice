var express = require('express');
var router = express.Router();

// Get Homepage /mas/
router.post('/POSTreciever', function(req, res) {
	console.log('Request body -> ', req.body)
	res.sendStatus(200);
});

module.exports = router;