// Code your solution in this file
function findMatching(drivers, name) {
    const matchedNames = drivers.filter(function(driverName) { return driverName.toLowerCase() === name.toLowerCase() });
    return matchedNames;
}

function fuzzyMatch(drivers, letters) {
    const matchedNames = drivers.filter(function(driverName) { return driverName.slice(0, 2) === letters });
    return matchedNames;
}

function matchName(drivers, name) {
    const matchedDriver = drivers.filter(function(driver) { return driver.name === name });
    return matchedDriver;
}