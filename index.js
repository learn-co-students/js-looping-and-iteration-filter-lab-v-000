// Code your solution in this file

const drivers = [];

function findMatching(drivers, name) {
  return drivers.filter(function (driver){return driver.toLowerCase() === name.toLowerCase()});
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function (driver){return driver[0].toLowerCase() == name[0].toLowerCase()});
}

function  matchName(drivers, name) {
  return drivers.filter(function (driver){return driver.name === name});
}
