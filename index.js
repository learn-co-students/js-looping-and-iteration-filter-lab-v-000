function findMatching(drivers, str) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === str.toLowerCase();
  });
}


function fuzzyMatch(drivers, str){
  return drivers.filter(function (driver) {
    return driver[0,1] === str[0,1];
  });
}

function matchName(drivers, str){
  return drivers.filter(function (driver) {
    return driver.name === str;
  });
}
