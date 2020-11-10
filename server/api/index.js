// U express's router to route all our API endpoints
const express = require('express');
const router = express.Router();

//Use the weather class we made in ./weather.js to cal ur method which will get the weather data from our api
const Weather = require("./weather");

//GET request - statistically get the weather data from the weather api
router.get("/weather", async(req, res) => {
    let weather = new Weather();

    // Fixing the params of zipcode and tempMetric for an example GET request
    let weatherData = await weather.getWeatherData(98052, "us");

    // Content that will be sent will be a prettified json
    res.header("Content-type,'application/json");
    res.send(JSON.stringify(weatherData, null, 4));
});

// POST Request - dynamically get weather data based on request body
router.post("/weather", async (req, res) => {
    const {zipCode, tempMetric} = req.body;
    let weather = new Weather();

    // The params for zipCode and tempMetric are dynamic
    let weatherData = await weather.getWeatherData(zipCode, tempMetric);

    res.header("content-Type", 'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
});

module.exports = router;