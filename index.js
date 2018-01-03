// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (name) { return string.toUpperCase() === name.toUpperCase(); });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (name) {return string[0] === name[0];});
}

function matchName(drivers, string) {
  return drivers.filter(function (name) {
    return name.name.toUpperCase() === string.toUpperCase();
  });
}
