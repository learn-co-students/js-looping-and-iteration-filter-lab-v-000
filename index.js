// Code your solution in this file
function findMatching(drivers, query) {
  return drivers.filter(function(driver) {return driver.toLowerCase() === query.toLowerCase()});
}

function fuzzyMatch(drivers, query) {
  return drivers.filter(function(driver) {return driver.slice(0, query.length) === query});
}

function matchName(drivers, query) {
  return drivers.filter(function(driver) {
    for (const key in driver) {
      return driver[key] === query;
    }
  });
}
