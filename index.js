const fs = require('fs');

const TestFailures = require('./lib/test-failures');
var args = process.argv.slice(2);

let results = TestFailures.run(args[0]);
fs.writeFile(args[1], JSON.stringify(results, null, 2), function(err) {
  if(err) {
    return console.log(err);
  }
  console.log(`Results written to ${args[1]}`);
});
