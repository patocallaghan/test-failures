const parser = require('xml2json');

function keepLine(line) {
 return !line.includes('Global error') && !line.includes('testem.js not loaded');
}

module.exports = (testsXml) => {
  let testsObj = JSON.parse(parser.toJson(testsXml));
  if (testsObj.testsuite) {
    return testsObj.testsuite.testcase.filter(test => test.error);
  } else {
    return [];
  }
}

