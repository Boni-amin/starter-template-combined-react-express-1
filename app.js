// Require express / Import express here 
const express = require('express');
// Make app object
const app = new express();
// import dotenv middleware
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});


// import Router
const router = require('./src/Routes/api')

// Import all Security here
const rateLimit = require('express-rate-limit')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoSanitize = require('express-mongo-sanitize')
const formData= require('form-data')
const helmet = require('helmet')
const hpp = require('hpp')
const jsonWebToken = require('jsonwebtoken')
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const xssClean= require('xss-clean')
const validator = require('validator');
const multer = require('multer');
const path = require('path') // it is node js build in proparty 





// Security Middleware Implement
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp()); 
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb' , extended: true}));


// Requset Security Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,

});
// Apply the Security rate limiting middleware to all requests
app.use(limiter);



// Create Api router paths



//Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB Connected... Success ..')
})
.catch((err) => {
    console.log(err)
})


//Routing implementation
app.use("/api/v1", router);


// Fontend Route Define --- Backend er all security client side kaj korar jonno 
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname,'client','dist','index.html')) // react ke akhane Skaple kora hoice 
}) // here backend ke bole dewya hoice frotend ace .



// Home page Route
app.get("/", (req, res) => {
    res.status(200).json({status:"success",data:"This is Home Page"});
});

// Undefined route
app.get("*", (req, res) => {
    res.status(404).json({
        status: "error",
        message: "Route not found"
    });
});



// Export app
module.exports= app;