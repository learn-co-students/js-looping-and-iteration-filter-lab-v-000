function findMatching(drivers, string){
  return drivers.filter(function(driver){return driver.toLowerCase() === string.toLowerCase();})
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function(driver){return driver.toLowerCase().slice(0,2) === string.toLowerCase()})
}

function matchName(drivers, string){
  return drivers.filter(function(driver){return driver.name === string})
}
