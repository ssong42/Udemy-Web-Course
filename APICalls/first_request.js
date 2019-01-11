const request = require('request');

const word = process.argv[2];

if (!word) {
    console.log("node first_request.js {word}");
    process.exit()
}

var response = request(`http://api.urbandictionary.com/v0/define?term=${word}`, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body);
        console.log(parsedData["list"][0]);
    }
})