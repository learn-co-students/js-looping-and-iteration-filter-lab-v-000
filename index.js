

function findMatching(drivers, name) {
  
 return drivers.filter(function (riverName) {return riverName.toLowerCase() === name.toLowerCase()}) 
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (name) {return letters === name.slice(0, letters.length)})
}

function matchName(drivers, name) {
  return drivers.filter( function (driver) {
    return driver.name === name
  })
}