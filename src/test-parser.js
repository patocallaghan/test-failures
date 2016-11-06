const NOT_OK_REGEX = /^not ok .*?$/gm;

function keepLine(line) {
 return !line.includes('Global error') && !line.includes('testem.js not loaded');
}

module.exports = (lines) => {
  let results = [];
  let matches = lines.match(NOT_OK_REGEX);
  if (matches) {
    matches.forEach((line) => {
      if (keepLine(line)) {
        results.push(line.trim())
      }
    });
  }
  return results;
}

