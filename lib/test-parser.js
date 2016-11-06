"use strict";

var NOT_OK_REGEX = /^not ok .*?$/gm;

module.exports = function (lines) {
  var results = [];
  var matches = lines.match(NOT_OK_REGEX);
  if (matches) {
    matches.forEach(function (line) {
      results.push(line.trim());
    });
  }
  return results;
};