// Code your solution in this file

function findMatching(drivers, name) {
  let newDrivers = drivers.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase(); });
    return newDrivers;
}

function fuzzyMatch(drivers, name) {
  let filteredDrivers = drivers.filter(function(driver) {
    return driver.slice(0, name.length) === name;
   });
    return filteredDrivers;
}

function matchName(drivers, name) {
  let newDrivers = drivers.filter(function(driver) {
    return driver.name === name;
   });
    return newDrivers;
}
