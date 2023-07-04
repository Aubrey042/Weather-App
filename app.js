const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=79081ed513814203e83908f636610fd1&units=Imperial"
    https.get(url, function (response) {

        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const responseString = "The Current Temperature Is " + temp + "°F. " + description;
            res.send(responseString);
        });
    });
});

app.listen(3000, function (){
    console.log("Server Is Up & Running On Port 3000");
});
