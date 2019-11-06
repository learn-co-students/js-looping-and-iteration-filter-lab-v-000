// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}


function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.startsWith(string))
  console.log(string);
}


function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string)
}
