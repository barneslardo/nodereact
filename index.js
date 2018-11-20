var express = require("express"),
        app = express(),
        ejs = require("ejs");

app.set("view engine", "ejs");

// This is a note!
app.get("/", (req, res) =>{
    res.send({hi: 'there'});
    console.log("main hit");
});

app.get("/annie", (req, res) =>{
  res.render("annie");
  console.log("Annie is HOT!!!");
});

app.get("*", (req, res) =>{
  res.render("catch");
  console.log("catch hit");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("Server is running");
