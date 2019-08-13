require("dotenv").config();

const request = require("request");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);

const userOption = process.argv[2]; 
const inputParameter = process.argv[3];

UserInputs(userOption, inputParameter);

function UserInputs (userOption, inputParameter){
    switch (userOption) {
    case 'concert-this':
        showConcertInfo(inputParameter);
        break;

    }
}

function showConcertInfo(inputParameter){
    const queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    request(queryUrl, function(error, response, body) {
    
    if (!error && response.statusCode === 200) {
        var concerts = JSON.parse(body);
        for (var i = 0; i < concerts.length; i++) {  
            console.log("**********EVENT INFO*********");  
            fs.appendFileSync("log.txt", "**********EVENT INFO*********\n");
            console.log(i);
            fs.appendFileSync("log.txt", i+"\n");
            console.log("Name of the Venue: " + concerts[i].venue.name);
            fs.appendFileSync("log.txt", "Name of the Venue: " + concerts[i].venue.name+"\n");
            console.log("Venue Location: " +  concerts[i].venue.city);
            fs.appendFileSync("log.txt", "Venue Location: " +  concerts[i].venue.city+"\n");
            console.log("Date of the Event: " +  concerts[i].datetime);
            fs.appendFileSync("log.txt", "Date of the Event: " +  concerts[i].datetime+"\n");
            console.log("*****************************");
            fs.appendFileSync("log.txt", "*****************************"+"\n");
        }
    } else{
      console.log('Error occurred.');
    }
});}
