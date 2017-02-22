// Exercise 3: Create an Express.js app with a home page rendered by Jade template engine

var express = require("express");
var app = express();

app.set("views", __dirname + "/extra");
app.set("view engine", "jade");

app.get("/home", function(request, response){
    response.render("index", {date: new Date().toDateString()});
});


app.listen(process.argv[2]);