// Code your solution in this file
function findMatching(drivers, match){
  const newDrivers = []
  for(const driver of drivers){
    if (driver.toUpperCase() === match.toUpperCase()) {
      newDrivers.push(driver)
    }
  }
  return newDrivers
}

function fuzzyMatch(drivers, match){
  const newDrivers = []
  for(const driver of drivers){
    if(driver.startsWith(match)){
      newDrivers.push(driver)
    }
  }
  return newDrivers
}

function matchName(drivers, match){
  const newDrivers = []
  for(const driver of drivers){
    if(driver.name === match){
      newDrivers.push(driver)
    }
  }
  return newDrivers
}
