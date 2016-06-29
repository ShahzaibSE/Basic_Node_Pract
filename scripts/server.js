///<reference path="./../typings/tsd.d.ts"/>
"use strict";
//Import Libraries.
const express = require('express');
var fs = require('fs');
var decoder = require('string_decoder');
//Express Instance.
var app = express();
//Configure Server.
var port = process.env.PORT | 3000;
var server = app.listen(port, function () {
    var listening_port = server.address().port;
    console.log(`Listening on ${listening_port}`);
});
app.get('/', function (req, res) {
    fs.readFile('./../resources/text_files/file.txt', function (data, err) {
        if (data) {
            console.log(decoder.StringDecoder(data));
        }
        else {
            console.log(err);
        }
    });
});
var val = .2;
console.log(val.toString());
console.log(typeof val);
