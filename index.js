function findMatching(drivers, string) {
  return drivers.filter(function(name){
    return name.toLowerCase() === string.toLowerCase()});
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function(name){
    return name.slice(0, 2) === string;
  })
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.name.toUpperCase() === string.toUpperCase()
   });
}
