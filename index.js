function findMatching(drivers, name) {
  let foundDrivers = drivers.filter(function (driver) { return (name.toLowerCase() === driver.toLowerCase())});
  return foundDrivers;
}

function fuzzyMatch(drivers, string) {
  let foundDrivers = drivers.filter(function(driver) {return (driver.startsWith(string))});
  return foundDrivers;
}

function matchName(drivers, string) {
  let foundDrivers = drivers.filter(function (driver) { return (string === driver.name)});
  return foundDrivers;
}
