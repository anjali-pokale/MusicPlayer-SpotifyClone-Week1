const express=require("express");
const mongoose=require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport=require("passport");
require("dotenv").config();
const app=express();
const port=8080;
const User=require("./Models/user")
const authRoutes=require("./Routes/auth");
app.use(express.json());
const router = express.Router();



mongoose
    .connect(
        "mongodb+srv://admin:"+process.env.MONGO_PASSWORD+"@cluster0.jdgv0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
    )
    .then((x)=>{
        console.log("Connected to MongoDB")
    })
    .catch((err)=>{
        console.log("Error while connecting mongodb")
    });



let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'thisKeyIsSupposedToBeSecret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            
        }
    });
}));
    


app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.use("/auth",authRoutes);

app.listen(port,()=>{
    console.log("App is running on port "+port);
});
    