// Code your solution in this file

function findMatching(array, string) {
    return array.filter(function(driver) {return driver.toUpperCase() === string.toUpperCase()});
}

function fuzzyMatch(drivers, string) {
    let driverLength = string.length;
    return drivers.filter(function (driver) {return driver.substring(0, driverLength) === string});
}

function matchName(drivers, string) {
    return drivers.filter(function (driver) {return driver.name.toUpperCase() === string.toUpperCase()});
}