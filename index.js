// Code your solution in this file
function findMatching (drivers, name) {
  // const driversMatched = [];
  // for (const driver of drivers) {
  //   if (driver.toUpperCase() === name.toUpperCase()) {
  //     driversMatched.push(driver);
  //   }
  // }
  // return driversMatched;
  return drivers.filter( function (driver) { return driver.toUpperCase() === name.toUpperCase() });
}

function fuzzyMatch (drivers, name) {
  return drivers.filter( function (driver) { return driver[0] === name[0] });
}

function matchName (drivers, name) {
  return drivers.filter( function (driver) { return driver.name === name });
}
