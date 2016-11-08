const lineMetaGenerator = require('./line-meta-generator.js');
const testParser = require('./test-parser.js');

function processTestsMeta(testsMeta, finalOutput) {
  testsMeta.forEach((meta) => {
    if (!finalOutput[meta.team]) {
      let testMeta = {};
      testMeta[meta.testName] = [meta];
      finalOutput[meta.team] = {
        failingTests: [meta.testName],
        testMeta: testMeta
      };
    } else {
      let team = finalOutput[meta.team];
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

module.exports = (seed, totalPartitions, text, output = {}) => {
  let failedTests = testParser(text);
  let failedTestsMeta = lineMetaGenerator(seed, totalPartitions, failedTests);
  return processTestsMeta(failedTestsMeta, output);
}
