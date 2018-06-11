// Code your solution in this file
function findMatching(drivers, string){

  const newDrivers = drivers.filter(driver => (driver.toUpperCase() === string.toUpperCase()));

  return newDrivers
}

function fuzzyMatch(drivers, string){
  const string_length = string.length

  const newDrivers = drivers.filter(driver => (driver.slice(0,string_length) === string));

   return newDrivers
}


function matchName(drivers, string){
  const newDrivers = drivers.filter(driver => (driver.name === string));

  return newDrivers
}
