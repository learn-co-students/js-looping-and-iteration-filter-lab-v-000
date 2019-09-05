function findMatching(drivers, name){
  return drivers.filter(function(drivername){
    return drivername.toLowerCase() === name.toLowerCase()
  });
}

function fuzzyMatch(drivers, letters) {
  let_length = letters.length 
  return drivers.filter(function(driverletters){
    return driverletters.toLowerCase().slice(0,let_length) == letters.toLowerCase().slice(0,let_length)
  });
}

function matchName(drivers, name) {
  return drivers.filter(function(driver){
    return driver.name === name
  });
  
}