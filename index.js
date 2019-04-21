// Code your solution in this file

function findMatching(array, string) {
  const matches = array.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase() })
  return matches;
}

function fuzzyMatch(array, string) {
  const matches = array.filter(function (driver) { return driver.slice(0, string.length) === string })
  return matches;
}

function matchName(array, string) {
  const matches = array.filter(function (driver) { return driver.name === string })
  return matches;
}
