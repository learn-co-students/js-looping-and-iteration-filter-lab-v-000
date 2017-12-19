// Code your solution in this file

function findMatching(drivers, string) {
  return drivers.filter(function (driver) {
    return (driver.toUpperCase() === string.toUpperCase());
  })
};

function fuzzyMatch(drivers, string){
  return drivers.filter(function (driver) {
    return (driver.substring(0,2) === string.substring(0,2));
  })
};

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return (driver.name === string) ;
  })
};
