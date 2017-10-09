function findMatching(drivers, name) {
return drivers.filter(function(driver) { return driver.toUpperCase() === name.toUpperCase() })
//return newdriver
}

function fuzzyMatch(drivers, word) {
var filteredNames = drivers.filter(function(driver) {
       return driver.startsWith(word) 
    });
    return filteredNames;
}

function matchName(drivers, name) {
return drivers.filter(function(driver) { if (driver.name === name) {return driver} })
}