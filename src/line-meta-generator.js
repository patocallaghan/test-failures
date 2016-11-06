const TEAM_REGEX = /(General|(Team (Observe|Acquire|Growth|Support|Engage|Platform|DX)))/;
const PARTITION_REGEX = /Exam Partition #(\d+)/;
const TEST_TITLE_REGEX = /Exam Partition #\d+ - (.*?)$/m;

function getTeam(line) {
  let match = TEAM_REGEX.exec(line);
  if (!match && line.includes('model:selection-state')) {
    return 'observe';
  }
  return match[0].toLowerCase().replace('team ', '');
}

function getPartition(line) {
  return PARTITION_REGEX.exec(line)[1];
}

function getTestTitle(line) {
  return TEST_TITLE_REGEX.exec(line)[1];
}

module.exports = (seed, lines) => {
  return lines.map((line) => ({
    seed: seed,
    team: getTeam(line),
    partition: getPartition(line),
    testName: getTestTitle(line)
  }));
}
