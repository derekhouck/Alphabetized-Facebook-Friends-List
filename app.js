var express = require('express');
var favicon = require('serve-favicon');

var app = express();
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
})

var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Alphabetized Facebook Friends List listening at http://%s:%s", host, port)

})
