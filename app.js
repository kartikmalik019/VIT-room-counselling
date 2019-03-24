var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var User = require("./model/user");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
mongoose.connect("mongodb://localhost/agroHand")
var app = express();


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(require("express-session")({
    secret: "world is fake",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//passport.use(new LocalStrategy(User.authenticate()));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());









//////ROUTES///////
app.get("/",function(req,res){
    res.redirect("/register");
})

app.get("/buy",function(req,res){
    res.render("buy",{currentUser:req.user});
})

app.get("/sell",function(req,res){
    res.render("sell",{currentUser:req.user});
})






//////////AUTH ROUTES///////////////
//show sign up form
app.get("/register",function(req,res){
    res.render("sign-up");
})
//handling user signup
app.post("/register",function(req,res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('sign-up');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/buy");
        });
    });
});




app.get("/login",function(req,res){
    res.render("login");
});
//login logic
app.post("/login", passport.authenticate("local", {
    successRedirect: "/buy",
    failureRedirect: "/login"
}) ,function(req, res){
});
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


app.listen('5000',function(err){
    if(err){
        console.log(err);
    }else{
        console.log("App started on port 5000")
    }
})