// Code your solution in this file
function findMatching (drivers, name){
  name = name.toLowerCase();
  return drivers.filter ( driver => driver.toLowerCase() === name );
}

function fuzzyMatch (drivers, str) {
  return drivers.filter( driver => driver.startsWith(str) );
}

function matchName (drivers, name) {
  return drivers.filter ( driver => driver.name === name );
}
