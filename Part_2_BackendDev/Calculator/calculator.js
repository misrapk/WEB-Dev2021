const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ extended: true })); //write body parser everytime

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html"); //_dirname give the directory name
});

//post request
app.post("/", function(req, res) {
    // console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result is: " + result);
})

//for bmi calculatore
app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})
app.post("/bmicalculator", function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight / (height * height);
    res.send("BMI IS : " + bmi);

})

app.listen(3000, function() {
    console.log("Server is running on port 3000");
})