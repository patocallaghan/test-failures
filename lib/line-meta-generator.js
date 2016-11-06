'use strict';

var TEAM_REGEX = /(General|(Team (Observe|Acquire|Growth|Support|Engage|Platform|DX)))/;
var PARTITION_REGEX = /Exam Partition #(\d+)/;
var TEST_TITLE_REGEX = /Exam Partition #\d+ - (.*?)$/m;

function getTeam(line) {
  return TEAM_REGEX.exec(line)[0].toLowerCase().replace('team ', '');
}

function getPartition(line) {
  return PARTITION_REGEX.exec(line)[1];
}

function getTestTitle(line) {
  return TEST_TITLE_REGEX.exec(line)[1];
}

module.exports = function (seed, lines) {
  return lines.map(function (line) {
    return {
      seed: seed,
      team: getTeam(line),
      partition: getPartition(line),
      testName: getTestTitle(line)
    };
  });
};