const TEAM_REGEX = /(General|(Team (Observe|Acquire|Growth|Support|Engage|Platform|DX)))/;
const PARTITION_REGEX = /Exam Partition #(\d+)/;
const TEST_TITLE_REGEX = /Exam Partition #\d+ - (.*?)$/m;

function getTeam(line) {
  let match = TEAM_REGEX.exec(line);
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

module.exports = (seed, totalPartitions, tests) => {
  return tests.map((test) => ({
    seed: seed,
    totalPartitions: totalPartitions,
    team: getTeam(test.name),
    partition: getPartition(test.name),
    testName: getTestTitle(test.name),
    error: test.error
  }));
}
