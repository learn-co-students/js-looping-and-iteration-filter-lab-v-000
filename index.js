// Code your solution in this file

function findMatching (drivers, name) {
  const matchingDrivers = drivers.filter(function(driverName) { return driverName.toLowerCase() === name.toLowerCase() });
    return matchingDrivers;
}

function fuzzyMatch(drivers, letters) {
  const driverLetters = drivers.filter(function(fuzzyName) { return fuzzyName.slice(0, 2) === letters });
    return driverLetters;
}

function matchName(drivers, name) {
  const nameCheck = drivers.filter(function(driverName) {return driverName.name == name});
  return nameCheck;
}
