'use strict';

var NOT_OK_REGEX = /^not ok .*?$/gm;

function keepLine(line) {
  return !line.includes('Global error') && !line.includes('testem.js not loaded');
}

module.exports = function (lines) {
  var results = [];
  var matches = lines.match(NOT_OK_REGEX);
  if (matches) {
    matches.forEach(function (line) {
      if (keepLine(line)) {
        results.push(line.trim());
      }
    });
  }
  return results;
};