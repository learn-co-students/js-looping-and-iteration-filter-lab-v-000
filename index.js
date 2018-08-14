// Code your solution in this file
function findMatching(driversArray,  name){
 return driversArray.filter(function(driver){
   return driver.toUpperCase() == name.toUpperCase()
 });
}


function fuzzyMatch(driversArray, letters){
  let myRegEx=new RegExp('^' + letters);
  return driversArray.filter(function(driver){
    return driver.match(myRegEx)
  });
}


function matchName(driversArray, name){
  return driversArray.filter(function(driver){
    return Object.keys(driver).include(name)
  })
}

function matchName(drivers, nameValue){
  return drivers.filter(function(driver){
    if (driver.name == nameValue)
    return driver
  })
}
