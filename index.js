// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
function findMatching(drivers, name ) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver[0]=== name[0]);
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
