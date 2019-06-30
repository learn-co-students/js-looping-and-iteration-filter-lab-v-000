// Code your solution in this file

function findMatching(drivers, str) {
  const matching = [];
  
  drivers.filter (function(driver) { 
    if (driver.toLowerCase() === str.toLowerCase()){
      matching.push(driver);
      }
  });
  return matching;
}

function fuzzyMatch(drivers, str) {
  return drivers.filter (function(driver) {return driver.startsWith(str) });
}

function matchName (drivers, str) {
  return drivers.filter (function(driver) {
    for (const name in driver) {
      return str === driver[name]
    }
  });
}
