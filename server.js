var express = require('express');
var app = express();

app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
})

var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Alphabetized Facebook Friends List listening at http://%s:%s", host, port)

})
