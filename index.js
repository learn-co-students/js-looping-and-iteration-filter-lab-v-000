function findMatching (drivers, name) {
  return drivers.filter(function(arrObj){return arrObj.toLowerCase() === name.toLowerCase();});
}

function fuzzyMatch (drivers, name) {
  return drivers.filter(function(driver){return driver[0].toLowerCase() === name[0].toLowerCase();});
}

function matchName (drivers, name) {
  return drivers.filter(function(driver){return driver.name.toLowerCase() === name.toLowerCase();});
}