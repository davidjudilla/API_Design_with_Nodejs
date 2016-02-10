var express = require('express');
var app = express();

var data = {fname: "david", lname: "judilla"};

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html', function(err) {
		if (err) {
			res.status(500).send(err);
		}
	})
});

app.get('/data', function(req, res){
	res.json(data);
});

var port = 8000;

app.listen(port, function(){
	console.log('listening on http://localhost:' + port);
});