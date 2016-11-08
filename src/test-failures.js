const fs = require('fs');
const generateOutput = require('./generate-output.js');

var TestFailures = {
  run(directory = 'seeds', totalPartitions) {
    let results;
    let output = {};
    let filenames = fs.readdirSync(directory);
    filenames.forEach(function(filename) {
      let seed = filename.replace(/(\-\d+)?\.xml/, '');
      let content = fs.readFileSync(`${directory}/${filename}`, 'utf-8');
      results = generateOutput(seed, totalPartitions, content, output);
    });
    return results;
  }
};

module.exports = TestFailures;
