const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html")
})

app.post("/",function(req,res){

  var firstName = req.body.f1;
  var lastName = req.body.f2;
  var email = req.body.f3;

  console.log(firstName + lastName);
  res.send("Thanks for Signing in.")
})





app.listen(3000,function(){
  console.log("server is running on port 3000.");
})
