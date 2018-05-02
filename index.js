// Code your solution in this file
function findMatching(drivers, string){
  var new_drivers = [];
  for(const driver of drivers){
    if (driver.toLowerCase() == string.toLowerCase()){
      new_drivers.push(driver);
    }
  }
  return new_drivers;
}

function fuzzyMatch(drivers, string){
  var new_drivers = [];
  for(const driver of drivers){
    if (driver.charAt(0) == string.charAt(0)){
      new_drivers.push(driver);
    }
  }
  return new_drivers;
}

function matchName(drivers, string){
  var new_drivers = [];
  for(const driver of drivers){
    if (driver.name == string){
      new_drivers.push(driver);
    }
  }
  return new_drivers;
}
