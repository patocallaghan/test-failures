'use strict';

var fs = require('fs');
var generateOutput = require('./generate-output.js');

var TestFailures = {
  run: function run() {
    var directory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'seeds';
    var totalPartitions = arguments[1];

    var results = void 0;
    var output = {};
    var filenames = fs.readdirSync(directory);
    filenames.forEach(function (filename) {
      var seed = filename.replace(/(\-\d+)?\.xml/, '');
      var content = fs.readFileSync(directory + '/' + filename, 'utf-8');
      results = generateOutput(seed, totalPartitions, content, output);
    });
    return results;
  }
};

module.exports = TestFailures;