// Exercise 7: What's in a Query - Write a route that extracts data from a query string

var express = require("express")
var app = express()
var path = require("path")

app.get('/search', function(req, res){
    var query = req.query
    delete query.__proto__;
    res.send(JSON.stringify(query))
})

app.listen(process.argv[2])