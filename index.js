// Code your solution in this file

function findMatching(drivers, string) {
  return drivers.filter(name => name.toLowerCase() === string.toLowerCase());
}
function fuzzyMatch(drivers ,string) {
  return drivers.filter(name => name.slice(0,2) === string.slice(0,2));
}
function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string);
}
