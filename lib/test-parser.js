'use strict';

var parser = require('xml2json');

function keepLine(line) {
  return !line.includes('Global error') && !line.includes('testem.js not loaded');
}

module.exports = function (testsXml) {
  var testsObj = JSON.parse(parser.toJson(testsXml));
  if (testsObj.testsuite) {
    return testsObj.testsuite.testcase.filter(function (test) {
      return test.error;
    });
  } else {
    return [];
  }
};