require("dotenv").config();

const request = require("request");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);

const moment = require('moment');
moment().format();

const axios = require('axios');

const userOption = process.argv[2]; 
const inputParameter = process.argv[3];

UserInputs(userOption, inputParameter);

switch (userOption) {
    case "concert-this":
        concertThis(inputParameter);

        };


        function concertThis(inputParameter) {
            axios.get("https://rest.bandsintown.com/artists/" + inputParameter + "/events?app_id=codingbootcamp"p")
            .then(function(response) {    
                for (var i = 0; i < response.data.length; i++) {
        
                    const datetime = response.data[i].datetime; 
                    const dateArr = datetime.split('T'); 

