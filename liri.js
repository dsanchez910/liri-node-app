require("dotenv").config();

const keys = require("./keys.js");
const moment = require('moment')
moment().format();
const axios = require('axios');
const fs = require('fs');

const userOption = process.argv[2]; 
const inputParameter = process.argv[3];


switch (userOption) {
    case "concert-this":
        concertThis(inputParameter);
        break;

        };


        function concertThis(inputParameter) {
            axios.get("https://rest.bandsintown.com/artists/" + inputParameter + "/events?app_id=codingbootcamp")
            .then(function(response) {    
                for (var i = 0; i < response.data.length; i++) {
        
                    const datetime = response.data[i].datetime; 
                    const dateArr = datetime.split('T'); 
                    const concertResults = 
                    "--------------------------------------------------------------------" +
                        "\nVenue Name: " + response.data[i].venue.name + 
                        "\nVenue Location: " + response.data[i].venue.city +
                        "\nDate of the Event: " + moment(dateArr[0], "MM-DD-YYYY"); 
                console.log(concertResults);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
    })