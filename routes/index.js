var path = require('path');
var express = require('express');
var dbb = require('../db/pgdb.js');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/*', function(req, res, next) {
	res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
})


//*****************************
/* GET home page. */
router.post('/', function(req, res, next) {
	if (req.body && req.body.username) {
		res.status(200).send('Hello ' + req.body.username);	
	} else {
		res.status(200).send("What is your name?\n " + req.body.id)
	}
    
    next();
});


var myData={
	name: "Brandon",
	answer: "who are you?"
}

router.get('/api/more/:name', function (req, res) {
	res.send('Hello: ' + req.params.name);
});

router.get('/api/db', function (req, res) {
	dbb(res);
});
//*******************************


module.exports = router;
