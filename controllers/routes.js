var express = require('express');
var router = express.Router();
var path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({
    extended: false
}))

router.get("/", function(req, res){
    res.send("Hello World!");
})

router.post("/", function(req, res){
    console.log(re);
    res.json(req.body);
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