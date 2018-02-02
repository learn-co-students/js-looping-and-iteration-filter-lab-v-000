// Code your solution in this file
function findMatching(drivers, name){
  let filteredDrivers = []
  drivers.filter(driver =>{
    if(driver.toLowerCase() === name.toLowerCase()){
      filteredDrivers.push(driver)
    }
  })
  return filteredDrivers
}

function fuzzyMatch(drivers, name){
  let filteredDrivers = []
  drivers.filter(driver =>{
    if(driver.toLowerCase().slice(0, name.length) === name.toLowerCase()){
      filteredDrivers.push(driver)
    }
  })
  return filteredDrivers
}

function matchName(drivers, name){
  let filteredDrivers = []
  drivers.filter(driver =>{
    if(driver.name === name){
      filteredDrivers.push(driver)
    }
  })
  return filteredDrivers
}