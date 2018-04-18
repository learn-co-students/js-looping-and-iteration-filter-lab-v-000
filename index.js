// Code your solution in this file

function findMatching(drivers, name) {
  const result = drivers.filter(function(string) { return string.toLowerCase() === name.toLowerCase() });
  return result;
}

function fuzzyMatch(drivers, string) {
  const chars = string.length;
  const result = drivers.filter(function(driver) { return string.toLowerCase() === driver.slice(0, chars).toLowerCase() });
  return result;
}

function matchName(drivers, string) {
  const result = drivers.filter(function(driver) { return string.toLowerCase() === driver['name'].toLowerCase() })
  return result;
}
