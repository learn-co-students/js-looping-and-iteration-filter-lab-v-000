function findMatching(drivers, name) {
  return drivers.filter( function (driver_name) {
    return driver_name.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, letters){
  return drivers.filter( function (name) {
    return name.slice(0, letters.length).toLowerCase() === letters.toLowerCase();
  });
}

function matchName(drivers, name){
  return drivers.filter( function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  })
}
