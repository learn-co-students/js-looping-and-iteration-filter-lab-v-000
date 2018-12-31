// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function(n) {return n.toLowerCase() === name.toLowerCase();});
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function(n) {return n[0] === name[0];});
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name == name;});
}
