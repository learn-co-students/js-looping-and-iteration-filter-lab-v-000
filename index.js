// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(name) {return name.toLowerCase() === string.toLowerCase()});
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(name) {return name.slice(0, string.length) === string});
}

function matchName(drivers, string) {
  return drivers.filter(function(person) {return person.name === string});
}
