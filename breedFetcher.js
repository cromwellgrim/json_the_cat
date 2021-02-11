const request = require('request');

let args = process.argv.slice(2);
let breedName = args[0];
let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

request(url, function(error, response, body) {
  if (error != null) {
    console.log('error: ', error);
  };
  // console.log('body: ', body);
  // console.log('response: ', response.statusCode);
  
  const data = JSON.parse(body);
  // console.log(data);
  if (data.length === 0) {
    console.log('no such breed');
  }
  let dataArray = Object.entries(data);
  dataArray.forEach(([key, value]) => {
    // console.log(key);
    console.log(value.description);
    return;
  });


  return;
});

