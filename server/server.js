require('dotenv').config();
//unusual format - means what?
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 5000;
//again - think about meaning

// use bod parser to get data from POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//use API routes from the api folder - his means we put routes in here - and not the folder
const apis = require("./api");
app.use("/api", apis);

app.listen(port, () => console.log(`Listening on port ${port}`));
