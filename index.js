// Code your solution in this file

function findMatching(drivers, name){
    const newDrivers = drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase();
    })
    return newDrivers;
}

function fuzzyMatch(drivers, string) {
    const newDrivers = drivers.filter(function(driver) {
        return driver.slice(0, string.length) === string;
    })
    return newDrivers;
}

function matchName(drivers, string) {
    const newDrivers = drivers.filter(function(driver) {
        return driver.name === string;
    })
    return newDrivers;
}


