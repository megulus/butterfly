var express = require('express');
var app = express();

app.use(express.static('build'));

var server = app.listen(8000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at %s/%s', host, port);
});

