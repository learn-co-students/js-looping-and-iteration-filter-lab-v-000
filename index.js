// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter( driverName => driverName.toLowerCase() === name.toLowerCase() );
}

function fuzzyMatch(drivers, query) {
  return drivers.filter( driverName => driverName.match(new RegExp(`^${query}`, "i")) );
}

function matchName(drivers, name) {
  return drivers.filter( driver => driver.name.toLowerCase() === name.toLowerCase() );  
}