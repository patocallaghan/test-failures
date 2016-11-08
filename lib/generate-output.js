'use strict';

var lineMetaGenerator = require('./line-meta-generator.js');
var testParser = require('./test-parser.js');

function processTestsMeta(testsMeta, finalOutput) {
  testsMeta.forEach(function (meta) {
    if (!finalOutput[meta.team]) {
      var testMeta = {};
      testMeta[meta.testName] = [meta];
      finalOutput[meta.team] = {
        failingTests: [meta.testName],
        testMeta: testMeta
      };
    } else {
      var team = finalOutput[meta.team];
      if (!team.failingTests.includes(meta.testName)) {
        team.failingTests.push(meta.testName);
        team.failingTests.sort();
        team.testMeta[meta.testName] = [meta];
      } else {
        team.testMeta[meta.testName].push(meta);
      }
    }
  });
  return finalOutput;
}

module.exports = function (seed, totalPartitions, text) {
  var output = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var failedTests = testParser(text);
  var failedTestsMeta = lineMetaGenerator(seed, totalPartitions, failedTests);
  return processTestsMeta(failedTestsMeta, output);
};