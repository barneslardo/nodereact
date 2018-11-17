var express = require("express"),
        app = express(),
        ejs = require("ejs");

app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.send({hi: 'there'});
    console.log("main hit");
});

app.listen(5000);
console.log("Server is running");
