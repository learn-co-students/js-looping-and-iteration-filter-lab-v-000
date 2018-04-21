// Code your solution in this file

function findMatching(drivers, string){
  return drivers.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function (driver) { return driver.toLowerCase()[0] === string.toLowerCase()[0]; });
}

function matchName(drivers, string){
  const matchedNames = [];

  for (const key in drivers) {
    if (drivers[key].name === string) {
      matchedNames.push(drivers[key]);
    }
  }

  return matchedNames;
}
