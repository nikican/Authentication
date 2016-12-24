var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User = require("./models/user.js"),
    expressSession = require("express-session"),
    app = express();

mongoose.connect("mongodb://localhost/auth_demo");

app.set("view engine", "ejs");
app.use(expressSession({
    secret: "Nomi is grey",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", function(req, res) {
    res.render("secret");
});

//start server with C9 IP and port
app.listen(process.env.PORT, process.env.IP, function() {
    console.log(`Server started at ${process.env.IP}:${process.env.PORT}`);
});
