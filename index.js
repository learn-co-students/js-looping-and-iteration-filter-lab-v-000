// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(d => d.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(d => (d[0]+d[1]).toLowerCase() === name.toLowerCase());
}

function matchName(drivers, name) {
  return drivers.filter(d => d.name === name);
}