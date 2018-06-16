// Code your solution in this file
function findMatching(drivers, name) {
  match = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase() )
  return match
}

function fuzzyMatch(drivers, letters) {
  match = drivers.filter(driver => driver.startsWith(letters))
  return match
}

function matchName(drivers, name) {
  match = drivers.filter(function (driver) {
    return (driver.name === name);
  });
  return match 
}
