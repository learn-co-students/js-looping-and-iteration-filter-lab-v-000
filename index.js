// Code your solution in this file
function findMatching(drivers, driver) {
  return drivers.filter(function(name) {
    return name.toUpperCase() === driver.toUpperCase();
  })
}

function fuzzyMatch(drivers, letters) {
  const numOfLetters = letters.length;

  return drivers.filter(function(name) {
    const nameFragment = name.slice(0, numOfLetters);
    return nameFragment.toUpperCase() === letters.toUpperCase();
  })
}

function matchName(drivers, driver) {
  return drivers.filter(function(driverObj) {
    return driverObj.name.toUpperCase() === driver.toUpperCase();
  })
}
