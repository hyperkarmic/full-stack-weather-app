const axios = require("axios");

//configuring path to read the environment variable file .env, to get the weather api key
require ('dotenv').config({path: "./../../../.env"});

const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

class Weather {

    /**
     * gets weather data based on zipcode and which temp system to convert to (imperial vs metric)
     * 
     * @param {number}  zipcode used to get weather infor from weather api
     * @param {string} tempMetric imerial or mtric
     * @return {json} The data respnse from the weather api call.
     */

     getWeatherData = async (zipcode, tempMetric) => {

        /**
         * *Use get api for 'By ZIP code' (https://openweathermap.org/current#zip)
         * - The "us" query stands for United States
         * -"process.env.Weather_Key" is the api key we get from the .env file
         * units can be imperial or metric!!!
         */

         let url = `${baseURL}?zip=${zipCode},us&appid=${process.env.WEATHER_KEY}&units=${tempMetric}`;

         //Awaitable call to get the information from the weather api and then return the data
         // TODO: Add error handling for this call

         return (await axios(url)).data;
     }
}

module.exports = Weather;