// Code your solution in this file
function findMatching(drivers, str) {
  const newDrivers = drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
  return newDrivers;
}

function fuzzyMatch (drivers, str) {

  let len = str.length;
  const newDrivers = drivers.filter(driver => driver.substr(0,len) === str);
  return newDrivers;
}

function matchName(drivers, str) {
  const newDrivers = drivers.filter(driver => driver.name === str);
  return newDrivers;
}
