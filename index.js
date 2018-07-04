// Code your solution in this file
function findMatching(drivers, string) {
  const matchingDrivers = [];
  for(const driver of drivers) {
    if (driver.toLowerCase() === string.toLowerCase()) {
      matchingDrivers.push(driver);
    }
  }
  return matchingDrivers;
}

function fuzzyMatch(drivers, string) {
  const matchingDrivers = [];
  for(const driver of drivers) {
    if(driver.slice(0, string.length) === string) {
      matchingDrivers.push(driver);
    }
  }
  return matchingDrivers;
}

function matchName(drivers, string) {
  const matchingDrivers = [];
  for(const driver of drivers) {
    if (driver.name === string) {
      matchingDrivers.push(driver);
    }
  }
  return matchingDrivers;
}
