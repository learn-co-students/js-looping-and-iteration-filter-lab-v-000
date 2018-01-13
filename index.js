// Code your solution in this file
function findMatching(drivers, string) {
  const names = drivers.filter(function(name) { return name.toUpperCase() === string.toUpperCase()})
  return names
}

function fuzzyMatch(drivers, string) {
  const driver = drivers.filter(function(name) {return name[0] === string[0]})
  return driver
}

function matchName(drivers, string) {
  const driver = drivers.filter(function(person) {return person.name === string})
  return driver
}
