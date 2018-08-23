// Code your solution in this file



function findMatching(driversArray, name){
  return driversArray.filter(function (driver){
    return driver.toUpperCase() == name.toUpperCase();
  });
}

function fuzzyMatch(driversArray, characters){
  let regEx = new RegExp('^' + characters);
  return driversArray.filter(function (driver) {
    return driver.match(regEx);
  })
}

function matchName(drivers, nameValue) {
  return drivers.filter(function (driver){
    if (driver.name === nameValue)
    return driver
  })
}
 
