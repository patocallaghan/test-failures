var fs = require('fs');
var https = require('https');
var got = require('got');
var args = process.argv.slice(2);
var buildNum = args[0];
var CIRCLE_URL='https://circleci.com/api/v1.1/project/github/intercom/embercom/' + buildNum + '/artifacts?circle-token=' + process.env.CIRCLE_TOKEN;

let urls;

got(CIRCLE_URL, {
  json: true
})
  .then(response => {
    var artifacts = response.body;
    urls = artifacts.filter(artifact => artifact.url.includes('junit'))
      .map(artifact => artifact.url);
    urls.forEach((url) => {
      var fileName = url.replace('https://', '').replace(/\//g, '-');
      var fileToWrite = fs.createWriteStream('./seeds/' + fileName);
      url = url + '?circle-token=' + process.env.CIRCLE_TOKEN;
      var request = https.get(url, (response) => {
        response.pipe(fileToWrite);
        fileToWrite.on('finish', () => {
          fileToWrite.close(function() { console.log('finished'); });  // close() is async, call cb after close completes.
        });
      }).on('error', function(err) { // Handle errors
        console.log(err.message);
        fs.unlink(fileName); // Delete the file async. (But we don't check the result)
        if (cb) cb(err.message);
      });
    });
  })
  .catch(error => {
    console.log(error);
  });

// Streams 
// got.stream('todomvc.com').pipe(fs.createWriteStream('index.html'));

// // For POST, PUT and PATCH methods got.stream returns a WritableStream 
// fs.createReadStream('index.html').pipe(got.stream.post('todomvc.com'));
