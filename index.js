// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase()
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (name) {
    return name.charAt(0) === string.charAt(0)
  });

}

function matchName(drivers, name) {
  return drivers.filter(function (string) {
    return string.name.toLowerCase() === name.toLowerCase()
  });
}
