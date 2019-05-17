// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(driver){
    return driver.toLowerCase() == string.toLowerCase()
  });
};

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver){
    let first = driver.slice(0, 2);
    let second = string.slice(0,2);
    if (first == second) {
      return string;
    };
  });
};

function matchName(drivers, string) {
  return drivers.filter(function (driver){
    for (const key in driver) {
      if(driver[key] == string){
        return driver[key];
      };
    };
  });
};
