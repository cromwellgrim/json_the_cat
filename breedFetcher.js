const request = require('request');

let args = process.argv.slice(2);
let breedName = args[0];


const fetchBreedDescription = function(breedName, callback) {

  let desc;
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(url, function(error, response, body) {
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback('breed not found', null);
      return;
    }

    desc = data[0].description;

    callback(null, desc);
    
  });
  return desc;
};


module.exports = { fetchBreedDescription };