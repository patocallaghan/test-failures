const lineMetaGenerator = require('./line-meta-generator.js');
const testParser = require('./test-parser.js');

function processTestsMeta(testsMeta, finalOutput) {
  testsMeta.forEach((meta) => {
    if (!finalOutput[meta.team]) {
      let testMeta = {};
      let testSeedInfo = {};
      testSeedInfo[meta.seed] = meta.partition;
      testMeta[meta.testName] = testSeedInfo;
      finalOutput[meta.team] = {
        failingTests: [meta.testName],
        testMeta: testMeta
      };
    } else {
      let testSeedInfo = {};
      let team = finalOutput[meta.team];
      if (!team.failingTests.includes(meta.testName)) {
        team.failingTests.push(meta.testName);
        team.failingTests.sort();
        testSeedInfo[meta.seed] = meta.partition;
        team.testMeta[meta.testName] = testSeedInfo;
      } else {
        team.testMeta[meta.testName][meta.seed] = meta.partition;
      }
    }
  });
  return finalOutput;
}

module.exports = (seed, text, output = {}) => {
  let failedTests = testParser(text);
  let failedTestsMeta = lineMetaGenerator(seed, failedTests);
  return processTestsMeta(failedTestsMeta, output);
}
