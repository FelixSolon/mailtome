const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.get("/", function(req, res){
    res.send("Hello World!");
})

router.post("/", function(req, res){
    console.log(req);
    res.send(req);
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