// Code your solution in this file
function findMatching(drivers, string)
{
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string)
{
  return drivers.filter(driver => driver.substring(string.length, length) === string)
}

function matchName(drivers, name)
{
  return drivers.filter(driver => driver["name"] === name)
}
