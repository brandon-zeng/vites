var path = require('path');
var express = require('express');
var routes = require('./routes/index.js');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 80));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', routes);


app.listen(app.get('port'), function () {
  console.log('Example app listening on port 80!');
});
