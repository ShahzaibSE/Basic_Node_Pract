///<reference path="./../typings/tsd.d.ts"/>

//Import Libraries.
import express = require('express');
import bodyparser = require('body-parser');
import session = require('express-session');
import path = require('path');
var fs = require('fs');

//Express Instance.
var app:express.Express = express();

//Configure Server.
var port = process.env.PORT|3000;
var server = app.listen(port,function(){
    var listening_port = server.address().port;
    console.log(`Listening on ${listening_port}`);
})

app.get('/',function(req,res){
    console.log("Hello World");
})

