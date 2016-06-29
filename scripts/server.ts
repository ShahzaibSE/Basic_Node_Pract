///<reference path="./../typings/tsd.d.ts"/>

//Import Libraries.
import express = require('express');
import bodyparser = require('body-parser');
import session = require('express-session');
import path = require('path');
var fs = require('fs');
var decoder = require('string_decoder');

//Express Instance.
var app:express.Express = express();

//Configure Server.
var port = process.env.PORT|3000;
var server = app.listen(port,function(){           //This here we are getting an Instance of the server or the server itself.
    var listening_port = server.address().port;
    console.log(`Listening on ${listening_port}`);
})

app.get('/',function(req,res){
    fs.readFile('./../resources/text_files/file.txt',function(data,err){
         if(data){
             console.log(decoder.StringDecoder(data));
         }else{
             console.log(err);
         }
    })
})

var val = .2;
console.log(val.toString());
console.log(typeof val);




