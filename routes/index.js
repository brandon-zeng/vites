var path = require('path');
var express = require('express');
var dbb = require('../db/pgdb.js');
var mailer = require('../server/mailer.js');
var cryptoer = require('../server/cryptoer.js');
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

router.post('/api/feedback', function(req, res, next) {
	if (req.body && req.body.data) {
		var dec = cryptoer.decrypt(req.body.data);
		console.log('descrypted : ' + dec);
		var data = dec && JSON.parse(dec);
		data.name && mailer.sendMail(data.name, data.email, data.message, res);
	} else {
		res.send("error: data missing\n ")
	}
    
    //next();
});

router.post('/api/subscribe', function(req, res, next) {
	if (req.body && req.body.data) {
		var dec = cryptoer.decrypt(req.body.data);
		console.log('descrypted : ' + dec);
		var data = dec && JSON.parse(dec);
		data.email && mailer.subscribe(data.email, res);
	} else {
		res.send("error: data missing\n ")
	}
    
    //next();
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
