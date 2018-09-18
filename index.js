// Code your solution in this file
function findMatching(drivers, name) {
  let matches = []
  for (var i in drivers) {
    if (drivers[i].toUpperCase() === name.toUpperCase()) {
      matches.push(drivers[i]);
    }
  }
  return matches;
}
function fuzzyMatch(drivers, letters) {
  let matches = []
  for (var i in drivers) {
    if (drivers[i].toUpperCase().slice(0, letters.length) === letters.toUpperCase()) {
      matches.push(drivers[i]);
    }
  }
  return matches;
}
function matchName(drivers, name) {
  let matches = []
  for (var i in drivers) {
    if (drivers[i].name.toUpperCase() === name.toUpperCase()) {
      matches.push(drivers[i]);
    }
  }
  return matches;
}
