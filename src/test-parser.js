const NOT_OK_REGEX = /^not ok .*?$/gm;

module.exports = (lines) => {
  let results = [];
  let matches = lines.match(NOT_OK_REGEX);
  if (matches) {
    matches.forEach((line) => {
      results.push(line.trim())
    });
  }
  return results;
}

