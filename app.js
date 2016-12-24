var express = require("express");

var app = express("");

app.set("view engine", "ejs");

app("/", function(req, res) {
    res.render("home");
});

//start server with C9 IP and port
app.listen(process.env.PORT, process.env.IP, function() {
    console.log(`Server started at ${process.env.IP}:${process.env.PORT}`);
});
