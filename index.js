function findMatching(drivers, name) {
  return drivers.filter(function (n) { return n.toUpperCase() === name.toUpperCase(); });
}
function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (l) { return l.toUpperCase().substring(0,letters.length) === letters.toUpperCase(); });
}
function matchName(drivers, name) {
  return drivers.filter(function (n) { return n.name.toUpperCase() === name.toUpperCase(); });
}
