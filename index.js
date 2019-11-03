// Code your solution in this file
function findMatching(drivers, name) {
  let match = drivers.filter(function (text) {return text.toUpperCase() === name.toUpperCase(); });
  return match
}


function fuzzyMatch(drivers, letter) {
  let match = drivers.filter(function (text) {return text.slice(0, letter.length) === letter });
  return match
}

function matchName(drivers, letter) {
  let match = drivers.filter(function (driver) {return driver.name === letter });
  return match
}
