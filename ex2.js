// Exercise 2: Create an Express.js app that will serve a page provided as an arg 

var express = require("express");
var app = express();

app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);