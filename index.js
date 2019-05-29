// Code your solution in this file

function findMatching(drivers, name) {
  let newDrivers = drivers.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase(); });
    return newDrivers;
}

function fuzzyMatch(drivers, index, name) {
  let filteredDrivers = drivers.filter(function(driver) {
    return driver.charAt(index) === name;
   });
    return filteredDrivers;
}
