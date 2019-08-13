require("dotenv").config();

var request = require("request");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var userOption = process.argv[2]; 
var inputParameter = process.argv[3];

UserInputs(userOption, inputParameter);