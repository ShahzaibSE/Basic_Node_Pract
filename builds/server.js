///<reference path="./../typings/tsd.d.ts"/>
var fs = require('fs');
//Express Instance.
var app = express();
//Configure Server.
var port = process.env.PORT | 3000;
var server = app.listen(port, function () {
    var listening_port = server.address().port;
    console.log(`Listening on ${listening_port}`);
});
app.get('/', function (req, res) {
    console.log("Hello World");
});
