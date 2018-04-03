// Code your solution in this file
function findMatching(drivers,string){
  return drivers.filter(function(driver){return driver.toLowerCase() === string.toLowerCase();})
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function(driver){return driver.slice(0,letters.length) === letters;})
}

function matchName(drivers, string){
  return drivers.filter(function(driver){return driver.name===string})
}
