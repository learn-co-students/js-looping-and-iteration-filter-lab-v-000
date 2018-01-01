// Code your solution in this file
function findMatching(drivers, name) {
  let matches = drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase());
  return matches;
}

function fuzzyMatch(drivers, searchString) {
  let matches = drivers.filter((driver) => driver.substring(0,2) === searchString);
  return matches;
}

function matchName(drivers, name) {
  let matches = drivers.filter((driver) => driver.name === name);
  return matches;
}
