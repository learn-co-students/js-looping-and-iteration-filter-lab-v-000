function findMatching(drivers, string) {
  const names = drivers.filter(function(driver) { return driver.toLowerCase() == string.toLowerCase(); });
  return names;
}

function fuzzyMatch(drivers, string) {
  const names = drivers.filter(function(driver) { return driver[0] == string[0] && driver[1] == string[1]; });
  return names;
}

function matchName(drivers, string) {
  const names = drivers.filter(function(driver) { return driver.name == string; });
  return names;
}
