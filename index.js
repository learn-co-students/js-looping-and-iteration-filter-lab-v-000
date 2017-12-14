function findMatching (drivers, string) {
  // return drivers.filter( function (driver) { return driver.toLowerCase() === string.toLowerCase(); });
  return drivers.filter( driver => driver.toLowerCase() === string.toLowerCase() );
}


function fuzzyMatch (drivers, string) {
  return drivers.filter( driver => driver.startsWith(string) );
}


function matchName(drivers, string) {
  return drivers.filter( driver => driver.name === string );
}

