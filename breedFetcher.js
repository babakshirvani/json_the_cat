const request = require('request');
const argv = process.argv.slice(2);
const nameSearch = argv[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${nameSearch}`, function(error, response, body) {
  if (error !== null) return console.log(error);
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (data.length === 0) return console.log("I couldnt find it Please make sure you dont have any typo!!");
  console.log(data);
  // console.log(typeof data);
  console.log(data[0].description);

});
