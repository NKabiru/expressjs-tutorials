// Exercise 6: Param-pam-pam - Create server that processes PUT requests

var express = require("express")
var app = express()
var path = require("path")
var crypto = require("crypto")

app.put('/message/:id', function(req, res){
    var msg = crypto.createHash('sha1')
                .update(new Date().toDateString() + req.params.id)
                .digest('hex')
        
    res.send(msg);    
})

app.listen(process.argv[2])



