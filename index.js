function findMatching(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver) {return driver.toLowerCase() === name.toLowerCase();});
  return matchingDrivers;
  }

function fuzzyMatch(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver) {return driver.toLowerCase().slice(0,2) === name.toLowerCase().slice(0,2);});
  return matchingDrivers;
}

function matchName(drivers, name)  {
  let matchingDrivers = drivers.filter(function(driver) {return driver.name === name;});
  return matchingDrivers;
}
