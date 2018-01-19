var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
    res.send("Hello World!");
})

router.post("/", function(req, res){
    console.log(req);
    res.JSON(req);
})

module.exports = router;