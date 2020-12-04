const request = require('request');
const fs = require('fs');
// Implement a small command line node app called fetcher.js which should take a URL 
// as a command-line argument as well as a local file path and download the resource to the specified path. 

let myURL = process.argv[2];
let writePath = process.argv[3];



request(myURL, (error, response, body) => {
  if (error) {
    console.log("Something went wrong");
  } else {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  fs.writeFile(writePath, body, function (err,data) {
    if (err) {
      return console.log(err);
    } else {
    console.log("Downloaded and saved 3261 bytes to ./index/html");
    }
  }) ;
  }
  // const callback = function (err,data) { //another way of writing the error function in there
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log(data);
  // }

  // fs.writeFile(
  //   writePath,
  //   body,
  //   callback
  // )

});

// fs.writeFile('/etc/doesntexist', 'abc', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// });