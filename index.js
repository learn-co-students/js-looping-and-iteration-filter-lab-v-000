// Code your solution in this file
function findMatching(drivers, arg) {
  return drivers.filter(function(element) { return element.toLowerCase() === arg.toLowerCase(); });
}


function fuzzyMatch(drivers, arg) {
  return drivers.filter(function(element) { return element.startsWith(arg) });
}

function matchName(drivers, arg) {
  return drivers.filter(function(element) { return element.name === arg });
}
