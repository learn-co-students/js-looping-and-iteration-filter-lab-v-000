// Code your solution in this file
drivers ={};

function findMatching(drivers, name){
  return drivers.filter(function (driver) {
   return driver.toLowerCase() === name.toLowerCase();
 });
}

function fuzzyMatch(drivers, name){
  let len = name.length;
    return drivers.filter(function (driver) {
      return driver.slice(0, len) === name;
    });
}

function matchName(drivers, user){
  return drivers.filter(function (driver) {
   return driver.name.toLowerCase() === user.toLowerCase();
 });
}
