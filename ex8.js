// Exercise 8: JSON ME - Create server that reads a file, parses it to JSON and outputs content

var express = require("express")
var path = require("path")
var fs = require("fs")
var app = express()

app.use(express.static(process.argv[3]))

fs.readFile(process.argv[3], function(err, data){
    if(err){
        throw err
    }
    
    var str = JSON.parse(data)
    app.set('json spaces', 0)
    app.get('/books', function(req, res){
        res.json(str)
    })
})



app.listen(process.argv[2])