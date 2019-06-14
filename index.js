// Code your solution in this file
function findMatching (drivers, string){
  return drivers.filter(function (driver){
    return driver.toLowerCase() === string.toLowerCase();
  })
}
function fuzzyMatch (drivers, string){
  return drivers.filter(function (driver){
    return driver[0] === string[0];
  })
}
function matchName (drivers, string){
  return drivers.filter(function (driver){
    return driver.name ===string;
  })
}
