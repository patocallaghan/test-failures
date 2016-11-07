const fs = require('fs');

const TestFailures = require('./lib/test-failures');
var args = process.argv.slice(2);
console.log('params: ', args[0]);
let results = TestFailures.run(args[0]);
fs.writeFile("failed-tests.txt", JSON.stringify(results, null, 2), function(err) {
  if(err) {
    return console.log(err);
  }
  console.log("Results written to failed-tests.txt");
});
