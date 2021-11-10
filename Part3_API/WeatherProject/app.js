const express = require("express")
const https = require("https");
const bodyparser = require("body-parser");

const app = express()

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {

    console.log(req.body.cityName);
    console.log("Post recieved");

    const query = req.body.cityName;
    const apiKey = "4880125c4024048cfe28126c1f3a8e90";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" +
        query + "&appid=" + apiKey + "&units=" + unit;

    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDesc = weatherData.weather[0].descritption
            const icon = weatherData.weather[0].icon;
            const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2sx.png";
            res.write("<p>The weather is currently " + weatherDesc + "<p>");
            res.write("<h1> the temeperatiue in " + query + " is " + temp + " degrees Celsius.</h1>");
            res.write("<img src = " + imageUrl + ">");
            res.send()
        });
    });

});





app.listen(3000, function() {
    console.log("SERVER IS RUNNING ON 3000");
})