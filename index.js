const fs = require('fs');
const TestFailures = require('./lib/test-failures');
let results = TestFailures.run('seeds/50-partitions');
fs.writeFile("failed-tests-50-partitions.txt", JSON.stringify(results, null, 2), function(err) {
  if(err) {
    return console.log(err);
  }
  console.log("Results written to failed-tests.txt");
});
