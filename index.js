function findMatching(drivers,name){
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (drivers, beginningLetters) {
  return drivers.filter( function (driver){
    return driver.slice(0, beginningLetters.length) == beginningLetters;

  });
}

function matchName(drivers,name){
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
