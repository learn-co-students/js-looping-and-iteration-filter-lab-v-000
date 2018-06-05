

function findMatching(drivers, name) {
  
 return drivers.filter(function (s) {return s.toLowerCase() === name.toLowerCase()}) 
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (name) {return letters === name.slice(0, letters.length)})
}

function matchName(drivers, name) {
  return drivers.filter( function (driver_obj) {
    return driver_obj["name"] === name
  })
}