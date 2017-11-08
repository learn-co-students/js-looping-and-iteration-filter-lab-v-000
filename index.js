// Code your solution in this file
function findMatching(drivers, string){
  let arr = drivers.filter(function(driver){
    return driver.toUpperCase() === string.toUpperCase();
  });
  return arr;
}

function fuzzyMatch(drivers, string){
  let match = drivers.filter(function(driver){
    return driver[0] === string[0];
  });
  return match;
}

function matchName(drivers, string){
  let n = drivers.filter(function(driver){
    return driver.name === string;
  });
  return n;
}
