// Code your solution in this file
function findMatching(drivers, string){
  NewDrivers = drivers.filter(function (driver) {return driver.toLowerCase() === string.toLowerCase();});
  return NewDrivers;
};

function fuzzyMatch(drivers, string){
  NewDrivers = drivers.filter(function (driver) {return driver.slice(0, string.length) === string;});
  return NewDrivers;
};

function matchName(drivers, string){
  NewDrivers = drivers.filter(function (driver) {return driver.name === string});
  return NewDrivers;
};
