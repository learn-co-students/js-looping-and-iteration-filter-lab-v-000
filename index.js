// Code your solution in this file
function findMatching(drivers,string){
  return drivers.filter(function (driver) {
    return driver == string.charAt(0).toUpperCase() + string.slice(1) || driver == string.toLowerCase()
  })
}

function fuzzyMatch(drivers,string){

  return drivers.filter(function (driver){return driver.substring(0,string.length) == string})

  //  return driver.charAt(0) == string.charAt(0) && driver.charAt(1) == string.charAt(1) })
}

//[1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
function matchName(drivers,string){
  return drivers.filter(function (driver){return driver.name == string})
}
