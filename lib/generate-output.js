'use strict';

var lineMetaGenerator = require('./line-meta-generator.js');
var testParser = require('./test-parser.js');

function processTestsMeta(testsMeta, finalOutput) {
  testsMeta.forEach(function (meta) {
    if (!finalOutput[meta.team]) {
      var testMeta = {};
      var testSeedInfo = {};
      testSeedInfo[meta.seed] = meta.partition;
      testMeta[meta.testName] = testSeedInfo;
      finalOutput[meta.team] = {
        failingTests: [meta.testName],
        testMeta: testMeta
      };
    } else {
      var _testSeedInfo = {};
      var team = finalOutput[meta.team];
      if (!team.failingTests.includes(meta.testName)) {
        team.failingTests.push(meta.testName);
        team.failingTests.sort();
        _testSeedInfo[meta.seed] = meta.partition;
        team.testMeta[meta.testName] = _testSeedInfo;
      } else {
        team.testMeta[meta.testName][meta.seed] = meta.partition;
      }
    }
  });
  return finalOutput;
}

module.exports = function (seed, text) {
  var output = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var failedTests = testParser(text);
  var failedTestsMeta = lineMetaGenerator(seed, failedTests);
  return processTestsMeta(failedTestsMeta, output);
};