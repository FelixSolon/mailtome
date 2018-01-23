const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const methodOverride = require("method-override");
const bodyParser = require("body-parser");

router.get("/", function(req, res){
    res.send("Hello World!");
})

router.post("/", function(req, res){
    console.log(req);
    res.JSON(req.body);
})

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "beeproductiveapp@gmail.com",
        //In the "settings" page on Heroku if you really need it, but please don't touch.
        pass: process.env.GMAIL_PAS
    }
});

if(smtpTransport){
    console.log("Mail running")
    console.log(process.env.gmailPassword)
}

module.exports = router;