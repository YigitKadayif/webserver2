const express = require("express");
const https = require("https");
const path = require('path');
const app = express();
const fs = require("fs");

const options = 
{
    key: fs.readFileSync('sertifika/server.key'),
    cert: fs.readFileSync('sertifika/server.crt'),
}

var publicDir = path.join(__dirname,'icindekiler');
app.use("/icindekiler", express.static(publicDir));


app.get("/", function (req, res) 
{
    res.sendFile(__dirname + "/index.html");
});

https.createServer(options,app).listen(3000, function () 
{
    console.log("Server is running on localhost3000");
});