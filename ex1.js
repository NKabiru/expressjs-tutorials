// Exercise 1: Create an Express.js app that will print Hello World!

var express = require("express");
var app = express();

app.get('/home', function(req, res){
    res.end("Hello World!");
});
app.listen(process.argv[2]);