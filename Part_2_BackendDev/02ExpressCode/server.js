const express = require('express');
const app = express();
// const port = 3000;


// //very first server
// app.listen(3000);
app.get("/", function(req, res) {
    res.send("<h1>Hello</h1>");
})

app.get("/contact", function(req, res) {
    res.send("<h1>Contact ME HEre</h1> \n test@test.com");

})

app.get("/about", function(req, res) {
    res.send("A self PRogrammer | Educator");
})

app.listen(3000, function() {
    console.log("Server started on 3000");
})