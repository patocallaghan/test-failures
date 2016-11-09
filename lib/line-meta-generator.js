'use strict';

var TEAM_REGEX = /(General|(Team (Observe|Acquire|Growth|Support|Engage|Platform|DX)))/;
var PARTITION_REGEX = /Exam Partition #(\d+)/;
var TEST_TITLE_REGEX = /Exam Partition #\d+ - (.*?)$/m;

function getTeam(line) {
  var match = TEAM_REGEX.exec(line);
  if (!match && line.includes('model:selection-state')) {
    return 'observe';
  }
  if (!match) {
    return '';
  }
  return match[0].toLowerCase().replace('team ', '');
}

function getPartition(line) {
  return PARTITION_REGEX.exec(line)[1];
}

function getTestTitle(line) {
  return TEST_TITLE_REGEX.exec(line)[1];
}

module.exports = function (seed, totalPartitions, tests) {
  return tests.map(function (test) {
    return {
      seed: seed,
      totalPartitions: totalPartitions,
      team: getTeam(test.name),
      partition: getPartition(test.name),
      testName: getTestTitle(test.name),
      command: 'ember exam --split=' + totalPartitions + ' --partition=' + getPartition(test.name) + ' --random=' + seed + ' --server',
      gitCommit: seed,
      error: test.error
    };
  });
};