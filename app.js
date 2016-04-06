var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

var pm = require('./lib/pm');
app.pm = pm;



app.all('/c/:cmd', (req, res)=> {
	var cmdname = req.params['cmd'];
	var cmdfn   = require('./lib/cmds/' + cmdname);
	cmdfn(req, res);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

