// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driver) {return name.toLowerCase() === driver.toLowerCase();});
}

function fuzzyMatch(drivers, letter) {
  return drivers.filter(function (driver) {return driver.slice(0, letter.length) === letter;});
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {return driver.name === string;});
}
