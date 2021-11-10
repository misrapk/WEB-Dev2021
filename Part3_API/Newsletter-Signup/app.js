const express = require("express")
const bodyParser = require("body-parser")
const request = require("request");



const app = express();
app.use(express.static("public")); //to link static local file to the html page
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html")
});

//TODO: post route
app.post("/", function(req, res) {
    var firstname = req.body.fname;
    var secondName = req.body.lname;
    var email = req.body.email;

    console.log(firstname, secondName, email);
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});


//api key
//b07f66db57e2096d2e5b13333c06c87f-us20

//audience id : 94cc3c7d56